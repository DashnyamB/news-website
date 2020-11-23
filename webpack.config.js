const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "admin.html",
      template: "src/admin.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
