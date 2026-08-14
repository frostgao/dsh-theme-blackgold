/**
 * Black-gold theme for DeepSeek Harness: gold brand accents + full-page gold palette.
 *
 * All CSS lives in `./gold.module.css` and is inlined into the client bundle at
 * build time; the bundle injects it into a loader-owned `<style data-plugin>` tag.
 */
import type { Context } from '@deepseek-ai/cordis'
import './gold.module.css'

/** Brand primary → gold (light/dark). */
const GOLD_BRAND = {
  '--dsw-alias-brand-primary': { light: '#CFB53B', dark: '#F4C430' },
}

/** The subset of the theme service this plugin uses. */
interface ThemeService {
  overrideTokens(source: string, tokens: Record<string, { light: string; dark: string }>): () => void
}

export function apply(ctx: Context): void {
  const theme = ctx.get('theme') as ThemeService | undefined
  if (theme !== undefined) {
    ctx.effect(() => theme.overrideTokens('blackgold', GOLD_BRAND))
  }
}
