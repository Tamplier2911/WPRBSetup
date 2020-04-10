const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
  },

  mode: "development",

  devServer: {
    contentBase: path.resolve(__dirname, "./build"),
    index: "index.html",
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg)/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      //   {
      //     test: /\.html$/,
      //     use: [
      //       {
      //         loader: "html-loader",
      //       },
      //     ],
      //   },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    new HtmlWebPackPlugin({
      title: "Hello Webpack React",
      template: "public/index.html",
      description: "Description of app.",
    }),
  ],
};
