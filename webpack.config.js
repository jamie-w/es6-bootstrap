/**
 * This config takes some basic config from conf/webpack/<dev|prod>.js
 * and builds the appropriate webpack config from there.
 *
 * The primary difference is that dev has webpack hot reloading
 * whereas dev does not.
 *
 * The 'loaders' and 'output' need to exist here, because the path needs
 * to exist at the root (relative to the actual './client/...')
 */

var settings = require('./settings.js');
var bows = require('bows');
var path = require('path');


if(settings.DEBUG){
    var webpack = require('./conf/webpack/dev.js');
} else {
    var webpack = require('./conf/webpack/prod.js');
}

webpack.entry.push('./client/index.js')

webpack.output = {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/static/',
};

webpack.module = {
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
            include: path.join(__dirname, 'client')
        },
        // gather scss files for ?global? classes
        {
            test: /\.scss$/,
            include: /client/,
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
};

webpack.resolve = {
    extensions: ['', '.js', '.jsx']
};

module.exports = webpack;
