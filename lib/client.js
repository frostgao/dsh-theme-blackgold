window.__ModuleLoader__.load({
	id: "@frostgao/dsh-theme-blackgold",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region \0dsh-css:/Users/liminggao/Documents/dsh-new-ui/dsh-theme-blackgold/src/client/gold.module.css.mjs
		const css = "/* ==========================================================================\n   Black-gold theme CSS — rc.8 slot-based brand adaptation.\n\n   The whale is now FishLogo (viewBox 0 0 23.16 17.04) and the name is\n   BrandWordmark includeMark=false (viewBox 26 0 156 24); both render through\n   the brand slots this theme fills (`.dsh-gold-mark` / `.dsh-gold-name`).\n   ========================================================================== */\n\n/* ---- Whale mark (FishLogo) — gold outline, body rides currentColor ---- */\n.dsh-gold-mark {\n  display: inline-flex;\n  line-height: 0;\n}\n.dsh-gold-mark svg {\n  overflow: visible;\n}\n.dsh-gold-mark svg path {\n  stroke: #C9A227;\n  stroke-width: 0.8;\n  stroke-linejoin: round;\n}\nbody[data-ds-dark-theme] .dsh-gold-mark svg path {\n  fill: #000;\n  stroke: #F4C430;\n}\n\n/* ---- Name wordmark (BrandWordmark includeMark=false) ---- */\n.dsh-gold-name {\n  display: inline-flex;\n  line-height: 0;\n  position: relative;\n}\n/* The wordmark still carries the whale <g> but clips it via viewBox=\"26 0 156 24\".\n   overflow must stay hidden or the clipped whale leaks out as a second mark. */\n.dsh-gold-name svg {\n  overflow: hidden;\n}\n/* HARNESS badge text rides the inverted label token — force gold. */\n.dsh-gold-name svg path[fill=\"var(--dsw-alias-label-primary-inverted)\"] {\n  fill: #F4C430;\n}\n.dsh-gold-name svg g[clip-path=\"url(#dsh-wordmark-badge-clip)\"] {\n  filter: drop-shadow(0 0 0.5px #CFB53B);\n}\n.dsh-gold-name svg > rect {\n  stroke: #CFB53B;\n  stroke-width: 0.6;\n}\nbody[data-ds-dark-theme] .dsh-gold-name svg > rect {\n  fill: #000;\n}\n\n/* ---- HARNESS sheen sweep over the badge (right end of the wordmark) ---- */\n.dsh-gold-name::after {\n  content: '';\n  position: absolute;\n  top: 5.5px;\n  right: 31px;\n  width: 22px;\n  height: 14px;\n  border-radius: 2px;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.78), transparent);\n  opacity: 0;\n  animation: dsh-harness-sheen 2.6s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes dsh-harness-sheen {\n  0%   { transform: skewX(-20deg) translateX(0);    opacity: 0; }\n  12%  { transform: skewX(-20deg) translateX(0);    opacity: 0.85; }\n  55%  { transform: skewX(-20deg) translateX(30px); opacity: 0.85; }\n  70%  { transform: skewX(-20deg) translateX(30px); opacity: 0; }\n  100% { transform: skewX(-20deg) translateX(30px); opacity: 0; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dsh-gold-name::after { animation: none; opacity: 0; }\n}\n\n/* ---- Full-page black-gold (light + dark) — tokens still valid in rc.8 ---- */\nbody {\n  --dsw-alias-state-business-primary: #C9A227;\n  --dsw-alias-state-business-tertiary: #F5E9C7;\n  --dsw-specific-sidebar-nav-item-active-accent: #F5E9C7;\n  --dsw-alias-button-info-fill: #C9A227;\n  --dsw-alias-button-info-hover: #D9B44A;\n  --dsw-specific-bubble: var(--dsw-static-neutral-bluish-50);\n}\nbody[data-ds-dark-theme] {\n  --dsw-alias-state-business-primary: #F4C430;\n  --dsw-alias-state-business-tertiary: #3a3113;\n  --dsw-specific-sidebar-nav-item-active-accent: #3a3113;\n  --dsw-alias-button-info-fill: #F4C430;\n  --dsw-alias-button-info-hover: #E3C04B;\n}\n\n/* Dark send/stop button: black circle + gold icon + gold ring. */\nbody[data-ds-dark-theme] button:has(> svg[viewBox=\"0 0 16 16\"] > path[d^=\"M8.3125\"]),\nbody[data-ds-dark-theme] button:has(> svg[viewBox=\"0 0 16 16\"] > rect[x=\"3\"][width=\"10\"]) {\n  background: #000;\n  color: #F4C430;\n  box-shadow: inset 0 0 0 1px #CFB53B;\n}\nbody[data-ds-dark-theme] button:has(> svg[viewBox=\"0 0 16 16\"] > :is(path[d^=\"M8.3125\"], rect[x=\"3\"][width=\"10\"])):hover {\n  background: #1a1a1a;\n}\n\n/* Deep diving status: gold shimmer. */\ndiv[role=\"status\"][aria-live=\"polite\"] {\n  background-image: linear-gradient(90deg, #C9A227 0%, #C9A227 40%, #F5E9C7 50%, #C9A227 60%, #C9A227 100%);\n}\nbody[data-ds-dark-theme] div[role=\"status\"][aria-live=\"polite\"] {\n  background-image: linear-gradient(90deg, #F4C430 0%, #F4C430 40%, #FFE9A8 50%, #F4C430 60%, #F4C430 100%);\n}\n\n/* Hero glow: light gold instead of the hardcoded blue ellipse. */\nsvg[viewBox=\"0 0 1051 468\"] ellipse {\n  fill: #E3C04B;\n}\n\n/* ---- Blue → gold: recolor the whole blue ramp so nothing stays blue ---- */\n/* rc.8's blues live in two ramps: --dsw-static-deepseek-* (buttons/business\n   states) and --dsw-static-blue-* (generic blue). Map every shade to gold. */\nbody {\n  --dsw-static-deepseek-50: #F7F0DC;\n  --dsw-static-deepseek-100: #F5E9C7;\n  --dsw-static-deepseek-200: #EAD9A4;\n  --dsw-static-deepseek-300: #DFC478;\n  --dsw-static-deepseek-400: #D9B44A;\n  --dsw-static-deepseek-450: #CFB53B;\n  --dsw-static-deepseek-500: #C9A227;\n  --dsw-static-deepseek-600: #B8961F;\n  --dsw-static-deepseek-800: #8A6C2A;\n  --dsw-static-deepseek-900: #6E5418;\n\n  --dsw-static-blue-50: #F7F0DC;\n  --dsw-static-blue-50p: #F7F0DC;\n  --dsw-static-blue-75: #F5E9C7;\n  --dsw-static-blue-100: #F5E9C7;\n  --dsw-static-blue-300: #DFC478;\n  --dsw-static-blue-400: #D9B44A;\n  --dsw-static-blue-450: #C9A227;\n  --dsw-static-blue-500: #C9A227;\n  --dsw-static-blue-600: #B8961F;\n  --dsw-static-blue-800: #8A6C2A;\n  --dsw-static-blue-900: #6E5418;\n  --dsw-static-blue-950: #3a3113;\n\n  --dsw-alias-button-primary-fill: #C9A227;\n  --dsw-alias-button-primary-hover: #D9B44A;\n}\nbody[data-ds-dark-theme] {\n  --dsw-static-deepseek-50: #3a3113;\n  --dsw-static-deepseek-100: #3a3113;\n  --dsw-static-deepseek-200: #4a3d1a;\n  --dsw-static-deepseek-300: #6E5418;\n  --dsw-static-deepseek-400: #E3C04B;\n  --dsw-static-deepseek-450: #F4C430;\n  --dsw-static-deepseek-500: #F4C430;\n  --dsw-static-deepseek-600: #E3C04B;\n  --dsw-static-deepseek-800: #8A6C2A;\n  --dsw-static-deepseek-900: #6E5418;\n\n  --dsw-static-blue-50: #3a3113;\n  --dsw-static-blue-50p: #3a3113;\n  --dsw-static-blue-75: #3a3113;\n  --dsw-static-blue-100: #4a3d1a;\n  --dsw-static-blue-300: #6E5418;\n  --dsw-static-blue-400: #E3C04B;\n  --dsw-static-blue-450: #F4C430;\n  --dsw-static-blue-500: #F4C430;\n  --dsw-static-blue-600: #E3C04B;\n  --dsw-static-blue-800: #8A6C2A;\n  --dsw-static-blue-900: #6E5418;\n  --dsw-static-blue-950: #2a2413;\n\n  --dsw-alias-button-primary-fill: #F4C430;\n  --dsw-alias-button-primary-hover: #E3C04B;\n}\n";
		const tagId = "@frostgao/dsh-theme-blackgold/gold";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@frostgao/dsh-theme-blackgold";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/client/index.ts
		/** Brand primary → gold (light/dark). */
		const GOLD_BRAND = { "--dsw-alias-brand-primary": {
			light: "#CFB53B",
			dark: "#F4C430"
		} };
		/** Required services: the slot registry and the theme registry. */
		const inject = ["slots", "theme"];
		/** Whale mark occupant (sidebar + hero). */
		function GoldMark({ size, className }) {
			return (0, react.createElement)("span", { className: "dsh-gold-mark" }, (0, react.createElement)(_deepseek_ai_dsh_client_ui_primitives.FishLogo, {
				size,
				className
			}));
		}
		/** Name wordmark occupant ("deepseek" + HARNESS badge). */
		function GoldName() {
			return (0, react.createElement)("span", { className: "dsh-gold-name" }, (0, react.createElement)(_deepseek_ai_dsh_client_ui_primitives.BrandWordmark, { includeMark: false }));
		}
		function apply(ctx) {
			const theme = ctx.get("theme");
			if (theme !== void 0) ctx.effect(() => theme.overrideTokens("blackgold", GOLD_BRAND), "blackgold: brand tokens");
			const slots = ctx.get("slots");
			if (slots === void 0) return;
			slots.inject("sidebar.brand.mark", () => slots.register({ name: "sidebar.brand.mark" }, GoldMark));
			slots.inject("sidebar.brand.name", () => slots.register({ name: "sidebar.brand.name" }, GoldName));
			slots.inject("conversation.hero.brand.mark", () => slots.register({ name: "conversation.hero.brand.mark" }, GoldMark));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
