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

/**
 * Full black-gold token remap (light/dark). Applied through the theme service
 * so it becomes inline CSS variables (`body.style.setProperty`) — highest
 * precedence, unbeatable by ui-theme's own stylesheet token definitions.
 * Keeping the whole blue ramp here also means every blue accent flips to gold
 * in one place.
 */
const GOLD_TOKENS = {
  // brand + buttons + business states
  '--dsw-alias-brand-primary': { light: '#CFB53B', dark: '#F4C430' },
  '--dsw-alias-button-primary-fill': { light: '#C9A227', dark: '#F4C430' },
  '--dsw-alias-button-primary-hover': { light: '#D9B44A', dark: '#E3C04B' },
  '--dsw-alias-button-info-fill': { light: '#C9A227', dark: '#F4C430' },
  '--dsw-alias-button-info-hover': { light: '#D9B44A', dark: '#E3C04B' },
  '--dsw-alias-state-business-primary': { light: '#C9A227', dark: '#F4C430' },
  '--dsw-alias-state-business-tertiary': { light: '#F5E9C7', dark: '#3a3113' },
  '--dsw-specific-sidebar-nav-item-active-accent': { light: '#F5E9C7', dark: '#3a3113' },
  '--dsw-specific-bubble': { light: '#f2f3f5', dark: '#222326' },

  // DeepSeek blue ramp → gold
  '--dsw-static-deepseek-50': { light: '#F7F0DC', dark: '#3a3113' },
  '--dsw-static-deepseek-100': { light: '#F5E9C7', dark: '#3a3113' },
  '--dsw-static-deepseek-200': { light: '#EAD9A4', dark: '#4a3d1a' },
  '--dsw-static-deepseek-300': { light: '#DFC478', dark: '#6E5418' },
  '--dsw-static-deepseek-400': { light: '#D9B44A', dark: '#E3C04B' },
  '--dsw-static-deepseek-450': { light: '#CFB53B', dark: '#F4C430' },
  '--dsw-static-deepseek-500': { light: '#C9A227', dark: '#F4C430' },
  '--dsw-static-deepseek-600': { light: '#B8961F', dark: '#E3C04B' },
  '--dsw-static-deepseek-800': { light: '#8A6C2A', dark: '#8A6C2A' },
  '--dsw-static-deepseek-900': { light: '#6E5418', dark: '#6E5418' },

  // generic blue ramp → gold
  '--dsw-static-blue-50': { light: '#F7F0DC', dark: '#3a3113' },
  '--dsw-static-blue-50p': { light: '#F7F0DC', dark: '#3a3113' },
  '--dsw-static-blue-75': { light: '#F5E9C7', dark: '#3a3113' },
  '--dsw-static-blue-100': { light: '#F5E9C7', dark: '#4a3d1a' },
  '--dsw-static-blue-300': { light: '#DFC478', dark: '#6E5418' },
  '--dsw-static-blue-400': { light: '#D9B44A', dark: '#E3C04B' },
  '--dsw-static-blue-450': { light: '#C9A227', dark: '#F4C430' },
  '--dsw-static-blue-500': { light: '#C9A227', dark: '#F4C430' },
  '--dsw-static-blue-600': { light: '#B8961F', dark: '#E3C04B' },
  '--dsw-static-blue-800': { light: '#8A6C2A', dark: '#8A6C2A' },
  '--dsw-static-blue-900': { light: '#6E5418', dark: '#6E5418' },
  '--dsw-static-blue-950': { light: '#3a3113', dark: '#2a2413' },
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
    ctx.effect(() => theme.overrideTokens('blackgold', GOLD_TOKENS), 'blackgold: token remap')
  }

  const slots = ctx.get('slots') as SlotRegistry | undefined
  if (slots === undefined) return

  slots.inject('sidebar.brand.mark', () => slots.register({ name: 'sidebar.brand.mark' }, GoldMark))
  slots.inject('sidebar.brand.name', () => slots.register({ name: 'sidebar.brand.name' }, GoldName))
  slots.inject('conversation.hero.brand.mark', () => slots.register({ name: 'conversation.hero.brand.mark' }, GoldMark))
}
