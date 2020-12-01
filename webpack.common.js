const HtmlWebpackPlugin = require("html-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "js/[name].[contenthash].bundle.js",
    publicPath: ASSET_PATH
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],
  resolve: {
      extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
        {test: /\.tsx?$/i, use: ['ts-loader'], exclude: /node_modules/},
      { test: /\.html$/i, use: ["html-loader"] },
      {
        test: /\.(svg|jpg|jpeg|mp4)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
        },
      },
    ],
  },
};
