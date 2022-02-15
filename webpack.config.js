const path = require("path");
const entry = require("./entry.js");
const htmlPages = require("./pages.js");

//Plugins
//const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: __dirname,
  entry,
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin(), ...htmlPages],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 5000,
    open: true,
    hot: true,
  },
};
