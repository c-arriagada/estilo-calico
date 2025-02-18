const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const BACKEND_SERVER =
    argv.mode === "production"
      ? "https://app.estilocalico.com"
      : "http://127.0.0.1:5000";

  return {
    entry: "./src/main.jsx",
    output: {
      publicPath: "/",
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, "dist"),
        publicPath: "/",
      },
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /.(js|jsx)$/, // transpile all files that end in .js
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./src/index.html",
      }),
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(BACKEND_SERVER),
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
