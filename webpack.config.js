const webpack = require('webpack');
module.exports = {
  entry: {
    bundle: "./src/main.js",
    vendor: [
      "axios",
      "lodash",
      "react",
      "react-dom",
      "react-redux",
      "redux",
      "redux-promise"
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor")
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  devtool: "cheap-module-eval-source-map"
};