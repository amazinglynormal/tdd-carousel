const HtmlWebapckPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    carousel: "./src/Carousel.js",
    example: "./example/index.js",
  },
  plugins: [
    new HtmlWebapckPlugin({ title: "Carousel Example", chunks: ["example"] }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve("babel-loader"),
      },
    ],
  },
};
