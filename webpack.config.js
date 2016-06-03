var path = require('path');
var webpack = require('webpack');

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
  ],
  resolve:{
        extensions: ['', '.js', '.jsx']
  },
  module: {
        loaders: [
        // will need something like this for all external css libs
        {
          test: /\.css$/,
          loader: 'style!css?modules',
          include: /flexboxgrid/,
        },
        // gather all js and jsx files + transpile them with babel
        {
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        },
        // gather scss files for ?global? classes
        {
            test: /\.scss$/,
            include: /src/,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        },
        // images!
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'url?limit=8192',
                'img'
            ]
        },

        ]
    }
};
module.exports = config;

