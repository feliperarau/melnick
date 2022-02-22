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
    publicPath: "/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.font\.js/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "webfonts-loader",
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|jpe?g|png|svg|webp)$/,
        loader: "file-loader",
        options: {
          limit: 8192,
          name: "media/images/[name].[hash:8].[ext]",
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    ...htmlPages,
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 5000,
    open: true,
    hot: true,
  },
};
