var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders:["babel-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
