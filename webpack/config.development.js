const TerserPlugin = require('terser-webpack-plugin');
const entry = require('./entry');

module.exports = {
  entry,
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  output: {
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
