
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css', {allChunks: false})
  ],
  resolve:{
        extensions: ['', '.js', '.jsx']
  },
  module: {
        loaders: [{
            test: /\.scss$/,
            include: /src/,
            loader: "style!css!autoprefixer!sass"
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader",
                "css-loader!autoprefixer-loader!sass-loader")
        },
        {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }]
    }
};
module.exports = config;

