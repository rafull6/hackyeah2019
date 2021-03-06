const webpack = require("webpack");

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/index.jsx",
  output: {
    filename: "index.js",
    publicPath: "/app/assets/",
    path: path.resolve(__dirname, "www/assets")
  },
  devServer: {
    contentBase: path.join(__dirname, "www"),
    hot: true,
    historyApiFallback: true,
    publicPath: "/assets/",
    open: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
              publicPath: "assets/img/"
            }
          }
        ]
      },
      {
        test: /\.svgin$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
