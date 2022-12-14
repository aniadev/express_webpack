const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app.bundle.js",
  },
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false, // and __filename return blank or /
  },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: [nodeExternals()],
};
