/**
 * Self-contained build for a standalone DSH client-plugin package (rc.8).
 *
 * Produces:
 *   - lib/index.js   (ESM host half — no host behavior)
 *   - lib/client.js  (browser bundle wrapped in `window.__ModuleLoader__.load`)
 *
 * The `.module.css` import is inlined by the plugin below and injected at
 * factory execution as a loader-owned `<style data-plugin>` tag. React and the
 * shared UI primitives stay external so the browser resolves them through the
 * loader's module table (the shell's static platform modules), keeping a single
 * React / primitives identity instead of bundling duplicates.
 */
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const ID = '@frostgao/dsh-theme-blackgold'

// Shell-seeded platform modules (packages/client/web/src/platform.ts). These
// must stay external: the browser resolves them from the loader's module table.
const PLATFORM_EXTERNALS = [
  'react', 'react/jsx-runtime', 'react-dom', 'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-ui-primitives',
] as const
const isPlatformExternal = (specifier: string): boolean =>
  PLATFORM_EXTERNALS.some(entry => specifier === entry || specifier.startsWith(`${entry}/`))

// Virtual-id suffix must NOT end in `.css` (tsdown's css-guard matches ids
// ending in `.css` and would otherwise demand `@tsdown/css`).
const CSS_VIRTUAL_PREFIX = '\0dsh-css:'
const CSS_VIRTUAL_SUFFIX = '.mjs'

/** Inline `.module.css` imports: emit a `<style data-plugin>` tag at factory execution. */
const inlineCss = () => ({
  name: 'dsh-inline-css',
  resolveId(source: string, importer: string | undefined) {
    if (!source.endsWith('.module.css')) return null
    const abs = importer !== undefined ? resolve(dirname(importer), source) : source
    return CSS_VIRTUAL_PREFIX + abs + CSS_VIRTUAL_SUFFIX
  },
  load(id: string) {
    if (!id.startsWith(CSS_VIRTUAL_PREFIX)) return null
    const css = readFileSync(id.slice(CSS_VIRTUAL_PREFIX.length, -CSS_VIRTUAL_SUFFIX.length), 'utf8')
    return [
      `const css = ${JSON.stringify(css)};`,
      `const tagId = ${JSON.stringify(`${ID}/gold`)};`,
      `if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + ']') === null) {`,
      `  const tag = document.createElement('style');`,
      `  tag.dataset.plugin = ${JSON.stringify(ID)};`,
      `  tag.dataset.pluginCss = tagId;`,
      `  tag.textContent = css;`,
      `  document.head.appendChild(tag);`,
      `}`,
      `export default {};`,
    ].join('\n')
  },
})

export default [
  {
    name: `${ID}/lib`,
    entry: { index: 'src/index.ts' },
    outDir: 'lib',
    format: ['esm'],
    platform: 'node',
    fixedExtension: false,
    dts: false,
    clean: false,
  },
  {
    name: `${ID}/client`,
    entry: { client: 'src/client/index.ts' },
    outDir: 'lib',
    format: ['cjs'],
    platform: 'browser',
    dts: false,
    clean: false,
    deps: {
      neverBundle: isPlatformExternal,
      alwaysBundle: (specifier: string) => !isPlatformExternal(specifier),
    },
    plugins: [inlineCss()],
    outputOptions: {
      entryFileNames: 'client.js',
      banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(ID)}, factory: (require) => {`,
      footer: 'return module.exports; } });',
      intro: 'var module = { exports: {} }; var exports = module.exports;',
    },
  },
]
