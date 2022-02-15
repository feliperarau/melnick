// Search for entries in ´pages´ directory
const path = require("path");
const fs = require("fs");

function getWebpackEntries() {
  /**
   * Pages Assets
   */
  const pagesDirectoryPath = path.join(__dirname, "pages");

  const assets = {};

  const pageFiles = fs.readdirSync(pagesDirectoryPath);

  pageFiles.forEach(function (page) {
    const jsPath = path.join(__dirname, "pages", page, "scripts.js");
    const cssPath = path.join(__dirname, "pages", page, "styles.scss");
    var name = page;

    if ("home" !== page) {
      name = `${page}/${page}`;
    }

    if (typeof assets[name] === "undefined") {
      assets[name] = [];
    }

    if (fs.existsSync(jsPath)) {
      assets[name].push(`./pages/${page}/scripts.js`);
    }

    if (fs.existsSync(cssPath)) {
      assets[name].push(`./pages/${page}/styles.scss`);
    }
  });

  return assets;
}

module.exports = getWebpackEntries();
