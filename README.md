# @frostgao/dsh-theme-blackgold

A **black-gold** theme plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness): gold accents on a black-and-white base, in both light and dark mode.

## What it themes

**Brand mark (sidebar logo)**
- Whale logo: gold outline + glow; smooth grow-and-tilt on hover; dark body + gold outline in dark mode.
- `HARNESS` badge: bright gold text on a black plate with a gold rim; periodic white shine sweep.
- `deepseek-official` letterforms stay ink-black.

**Full page (light + dark)**
- Brand / business accent → gold (send button, active chat/trajectory tab, active workspace folder, caret, highlights).
- Deep-diving "…" status → gold shimmer.
- Sidebar running-dot (StateDot) → gold pixel chase.
- Your own message bubble → sidebar gray (not gold).
- New-session hero radial glow → light gold.
- Trajectory view active states + ContextMeter "Messages" category → gold.

## Install

```bash
npm install @frostgao/dsh-theme-blackgold
```

Then add one row to your DSH profile's patch file (`~/.dsh/profiles/web/cordis.patch.yml`):

```yaml
- insert:
    - id: ui-blackgold-theme
      name: '@frostgao/dsh-theme-blackgold'
```

Restart `dsh web`.

## Requirements

- DeepSeek Harness (any recent version).
- The `@deepseek-ai/dsh-client-ui-theme` plugin must be composed (it is, in every shipped profile).

## Customizing the gold

All colors live in `lib/client.js`. Search for the hex values and change them:

| Role | Light | Dark |
|---|---|---|
| Page accent gold | `#C9A227` | `#F4C430` |
| Brand / whale / border gold | `#CFB53B` | `#CFB53B` |
| HARNESS text gold | `#F4C430` | `#F4C430` |
| Hero glow / hover gold | `#E3C04B` / `#D9B44A` | `#E3C04B` |
| Dark background tint | — | `#3a3113` |

## Notes / caveats

- **Couples to the shipped `BrandWordmark` SVG**: the whale / HARNESS selectors target the official
  `viewBox="0 0 182 24"` wordmark and its internal `clip-path` ids. If the Harness redesigns that SVG,
  those selectors may need updating.
- This is a *presentation override*, not a semantic restyle: it rides CSS variables and a few
  component-level vars, so it degrades gracefully if the underlying UI changes.
- `prefers-reduced-motion` is respected: the hover motion and shine sweep are disabled for users who
  ask for reduced motion.

## License

MIT — see [LICENSE](./LICENSE).
