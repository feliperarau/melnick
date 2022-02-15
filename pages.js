// Search for entries in ´pages´ directory
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function getWebpackPages() {
  /**
   * Pages Templates
   */
  const pagesDirectoryPath = path.join(__dirname, "pages");

  const pages = [];

  const pageFolders = fs.readdirSync(pagesDirectoryPath);

  pageFolders.forEach(function (page) {
    const templatePath = path.join(__dirname, "pages", page, "template.html");

    if (fs.existsSync(templatePath)) {
      var chunkName = "home" === page ? page : `${page}/${page}`;
      var fileName = "home" === page ? "index.html" : `${page}/index.html`;
      var params = {
        filename: fileName,
        template: `pages/${page}/template.html`,
        chunks: [chunkName],
      };

      pages.push(new HtmlWebpackPlugin(params));
    }
  });

  return pages;
}

module.exports = getWebpackPages();
