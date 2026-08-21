window.__ModuleLoader__.load({
	id: "@frostgao/dsh-theme-blackgold",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region \0dsh-css:/Users/liminggao/Documents/dsh-new-ui/dsh-theme-blackgold/src/client/gold.module.css.mjs
		const css = "/* ==========================================================================\n   Black-gold theme CSS — rc.8 slot-based brand adaptation.\n\n   Token recoloring lives in `index.ts` via theme.overrideTokens (inline CSS\n   vars). This file only carries element-targeting rules: whale outline, the\n   HARNESS badge, its sheen sweep, and a few component-level accents.\n   ========================================================================== */\n\n/* ---- Whale mark (FishLogo) — gold outline, body rides currentColor ---- */\n.dsh-gold-mark {\n  display: inline-flex;\n  line-height: 0;\n}\n.dsh-gold-mark svg {\n  overflow: visible;\n}\n.dsh-gold-mark svg path {\n  stroke: #C9A227;\n  stroke-width: 0.8;\n  stroke-linejoin: round;\n}\nbody[data-ds-dark-theme] .dsh-gold-mark svg path {\n  fill: #000;\n  stroke: #F4C430;\n}\n\n/* ---- Name wordmark (BrandWordmark includeMark=false) ---- */\n.dsh-gold-name {\n  display: inline-flex;\n  line-height: 0;\n  position: relative;\n}\n/* The wordmark still carries the whale <g> but clips it via viewBox=\"26 0 156 24\".\n   overflow must stay hidden or the clipped whale leaks out as a second mark. */\n.dsh-gold-name svg {\n  overflow: hidden;\n}\n/* HARNESS badge text rides the inverted label token — force gold. */\n.dsh-gold-name svg path[fill=\"var(--dsw-alias-label-primary-inverted)\"] {\n  fill: #F4C430;\n}\n.dsh-gold-name svg g[clip-path=\"url(#dsh-wordmark-badge-clip)\"] {\n  filter: drop-shadow(0 0 0.5px #CFB53B);\n}\n.dsh-gold-name svg > rect {\n  stroke: #CFB53B;\n  stroke-width: 0.6;\n}\nbody[data-ds-dark-theme] .dsh-gold-name svg > rect {\n  fill: #000;\n}\n\n/* ---- HARNESS sheen sweep over the badge (right end of the wordmark) ---- */\n.dsh-gold-name::after {\n  content: '';\n  position: absolute;\n  top: 5.5px;\n  right: 31px;\n  width: 22px;\n  height: 14px;\n  border-radius: 2px;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.78), transparent);\n  opacity: 0;\n  animation: dsh-harness-sheen 2.6s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes dsh-harness-sheen {\n  0%   { transform: skewX(-20deg) translateX(0);    opacity: 0; }\n  12%  { transform: skewX(-20deg) translateX(0);    opacity: 0.85; }\n  55%  { transform: skewX(-20deg) translateX(30px); opacity: 0.85; }\n  70%  { transform: skewX(-20deg) translateX(30px); opacity: 0; }\n  100% { transform: skewX(-20deg) translateX(30px); opacity: 0; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dsh-gold-name::after { animation: none; opacity: 0; }\n}\n\n/* Dark send/stop button: black circle + gold icon + gold ring. */\nbody[data-ds-dark-theme] button:has(> svg[viewBox=\"0 0 16 16\"] > path[d^=\"M8.3125\"]),\nbody[data-ds-dark-theme] button:has(> svg[viewBox=\"0 0 16 16\"] > rect[x=\"3\"][width=\"10\"]) {\n  background: #000;\n  color: #F4C430;\n  box-shadow: inset 0 0 0 1px #CFB53B;\n}\nbody[data-ds-dark-theme] button:has(> svg[viewBox=\"0 0 16 16\"] > :is(path[d^=\"M8.3125\"], rect[x=\"3\"][width=\"10\"])):hover {\n  background: #1a1a1a;\n}\n\n/* Deep diving status: gold shimmer. */\ndiv[role=\"status\"][aria-live=\"polite\"] {\n  background-image: linear-gradient(90deg, #C9A227 0%, #C9A227 40%, #F5E9C7 50%, #C9A227 60%, #C9A227 100%);\n}\nbody[data-ds-dark-theme] div[role=\"status\"][aria-live=\"polite\"] {\n  background-image: linear-gradient(90deg, #F4C430 0%, #F4C430 40%, #FFE9A8 50%, #F4C430 60%, #F4C430 100%);\n}\n\n/* Hero glow: light gold instead of the hardcoded blue ellipse. */\nsvg[viewBox=\"0 0 1051 468\"] ellipse {\n  fill: #E3C04B;\n}\n";
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
		/**
		* Full black-gold token remap (light/dark). Applied through the theme service
		* so it becomes inline CSS variables (`body.style.setProperty`) — highest
		* precedence, unbeatable by ui-theme's own stylesheet token definitions.
		* Keeping the whole blue ramp here also means every blue accent flips to gold
		* in one place.
		*/
		const GOLD_TOKENS = {
			"--dsw-alias-brand-primary": {
				light: "#CFB53B",
				dark: "#F4C430"
			},
			"--dsw-alias-button-primary-fill": {
				light: "#C9A227",
				dark: "#F4C430"
			},
			"--dsw-alias-button-primary-hover": {
				light: "#D9B44A",
				dark: "#E3C04B"
			},
			"--dsw-alias-button-info-fill": {
				light: "#C9A227",
				dark: "#F4C430"
			},
			"--dsw-alias-button-info-hover": {
				light: "#D9B44A",
				dark: "#E3C04B"
			},
			"--dsw-alias-state-business-primary": {
				light: "#C9A227",
				dark: "#F4C430"
			},
			"--dsw-alias-state-business-tertiary": {
				light: "#F5E9C7",
				dark: "#3a3113"
			},
			"--dsw-specific-sidebar-nav-item-active-accent": {
				light: "#F5E9C7",
				dark: "#3a3113"
			},
			"--dsw-specific-bubble": {
				light: "#f2f3f5",
				dark: "#222326"
			},
			"--dsw-static-deepseek-50": {
				light: "#F7F0DC",
				dark: "#3a3113"
			},
			"--dsw-static-deepseek-100": {
				light: "#F5E9C7",
				dark: "#3a3113"
			},
			"--dsw-static-deepseek-200": {
				light: "#EAD9A4",
				dark: "#4a3d1a"
			},
			"--dsw-static-deepseek-300": {
				light: "#DFC478",
				dark: "#6E5418"
			},
			"--dsw-static-deepseek-400": {
				light: "#D9B44A",
				dark: "#E3C04B"
			},
			"--dsw-static-deepseek-450": {
				light: "#CFB53B",
				dark: "#F4C430"
			},
			"--dsw-static-deepseek-500": {
				light: "#C9A227",
				dark: "#F4C430"
			},
			"--dsw-static-deepseek-600": {
				light: "#B8961F",
				dark: "#E3C04B"
			},
			"--dsw-static-deepseek-800": {
				light: "#8A6C2A",
				dark: "#8A6C2A"
			},
			"--dsw-static-deepseek-900": {
				light: "#6E5418",
				dark: "#6E5418"
			},
			"--dsw-static-blue-50": {
				light: "#F7F0DC",
				dark: "#3a3113"
			},
			"--dsw-static-blue-50p": {
				light: "#F7F0DC",
				dark: "#3a3113"
			},
			"--dsw-static-blue-75": {
				light: "#F5E9C7",
				dark: "#3a3113"
			},
			"--dsw-static-blue-100": {
				light: "#F5E9C7",
				dark: "#4a3d1a"
			},
			"--dsw-static-blue-300": {
				light: "#DFC478",
				dark: "#6E5418"
			},
			"--dsw-static-blue-400": {
				light: "#D9B44A",
				dark: "#E3C04B"
			},
			"--dsw-static-blue-450": {
				light: "#C9A227",
				dark: "#F4C430"
			},
			"--dsw-static-blue-500": {
				light: "#C9A227",
				dark: "#F4C430"
			},
			"--dsw-static-blue-600": {
				light: "#B8961F",
				dark: "#E3C04B"
			},
			"--dsw-static-blue-800": {
				light: "#8A6C2A",
				dark: "#8A6C2A"
			},
			"--dsw-static-blue-900": {
				light: "#6E5418",
				dark: "#6E5418"
			},
			"--dsw-static-blue-950": {
				light: "#3a3113",
				dark: "#2a2413"
			}
		};
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
			if (theme !== void 0) ctx.effect(() => theme.overrideTokens("blackgold", GOLD_TOKENS), "blackgold: token remap");
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
