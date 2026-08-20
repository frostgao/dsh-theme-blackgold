/**
 * Black-gold theme for DeepSeek Harness — rc.8 slot-based brand adaptation.
 *
 * rc.8 renders the shell brand through Cordis slots:
 *   sidebar.brand.mark / sidebar.brand.name / conversation.hero.brand.mark.
 * The official brand package only fills them for the `official` build profile,
 * so a local build falls back to a "DSH Local Build" text placeholder. This
 * theme fills the same slots with the gold whale + wordmark and restores the
 * black-gold palette.
 */
import type { Context } from '@deepseek-ai/cordis'
import { createElement as h } from 'react'
import { FishLogo, BrandWordmark } from '@deepseek-ai/dsh-client-ui-primitives'
import './gold.module.css'

/** Brand primary → gold (light/dark). */
const GOLD_BRAND = {
  '--dsw-alias-brand-primary': { light: '#CFB53B', dark: '#F4C430' },
}

/** The subset of the theme service this plugin uses. */
interface ThemeService {
  overrideTokens(source: string, tokens: Record<string, { light: string; dark: string }>): () => void
}

interface SlotRegistry {
  inject(name: string, callback: () => () => void): void
  register(options: { name: string; id?: string }, component: unknown): () => void
}

/** Required services: the slot registry and the theme registry. */
export const inject = ['slots', 'theme']

/** Whale mark occupant (sidebar + hero). */
function GoldMark({ size, className }: { size: number; className?: string }) {
  return h('span', { className: 'dsh-gold-mark' }, h(FishLogo, { size, className }))
}

/** Name wordmark occupant ("deepseek" + HARNESS badge). */
function GoldName() {
  return h('span', { className: 'dsh-gold-name' }, h(BrandWordmark, { includeMark: false }))
}

export function apply(ctx: Context): void {
  const theme = ctx.get('theme') as ThemeService | undefined
  if (theme !== undefined) {
    ctx.effect(() => theme.overrideTokens('blackgold', GOLD_BRAND), 'blackgold: brand tokens')
  }

  const slots = ctx.get('slots') as SlotRegistry | undefined
  if (slots === undefined) return

  slots.inject('sidebar.brand.mark', () => slots.register({ name: 'sidebar.brand.mark' }, GoldMark))
  slots.inject('sidebar.brand.name', () => slots.register({ name: 'sidebar.brand.name' }, GoldName))
  slots.inject('conversation.hero.brand.mark', () => slots.register({ name: 'conversation.hero.brand.mark' }, GoldMark))
}
