var webpack = require('webpack');

var config = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = config;

