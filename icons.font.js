module.exports = {
  files: ["./assets/fonts/icons/*.svg"],
  fontName: "icon",
  classPrefix: "icon-",
  baseSelector: ".icon",
  types: ["eot", "woff", "woff2", "ttf", "svg"],
  fixedWidth: false,
  dest: "./icons/",
  fileName: "[fontname].[chunkhash].[ext]",
};
