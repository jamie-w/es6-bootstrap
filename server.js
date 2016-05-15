require('babel-polyfill');
var server = require('express')();
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');
var bows = require('bows');
var bodyParser = require('body-parser');

var settings = require('./settings');
var logger = bows("server");

// Some important variables
var compiler = webpack(webpackConfig);

if(settings.DEBUG) { // test and dev

    // browser hot reloading
    server.use(webpackDevMiddleware(compiler, {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/static/',
        historyApiFallback: true,
        stats: {
            colors: true,
            chunkModules: false
        }
    }));

    server.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
    }));
}

// to parse post requests
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended:true
}));

// divert api requests
server.use('/api', require('./api/routes'));

// create the react server
server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


module.exports = server;
