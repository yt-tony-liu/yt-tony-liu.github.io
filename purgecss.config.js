module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Bootstrap generates popover/tooltip markup at runtime, so these classes never
  // appear in the scanned HTML.
  safelist: [/^bs-popover/, /^bs-tooltip/, "popover", "tooltip", "fade", "show"],
};
