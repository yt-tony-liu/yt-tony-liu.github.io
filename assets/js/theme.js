// The site is dark-mode only: there is no toggle and no light palette. `data-theme="dark"`
// is set statically on <html> in _layouts/default.liquid, and the dark syntax-highlighting
// stylesheet is enabled statically in _includes/head.liquid, so nothing here has to run
// before first paint.
//
// This file survives only to expose determineComputedTheme(), which the per-page setup
// scripts — mermaid-setup.js, echarts-setup.js, vega-setup.js, diff2html-setup.js,
// no_defer.js and common.js — all call to pick their own dark variants.

let determineComputedTheme = () => "dark";
