var app = require('express')();
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');
var bows = require('bows');

// Some important variables
var compiler = webpack(webpackConfig);
var logger = bows("The server");

// browser hot reloading
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/static/',
    historyApiFallback: true,
    stats: {
        colors: true,
        chunkModules: false
    }
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}));

// divert api requests
app.use('/api', require('./api/routes'));

// create the react app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

// open up to the world
var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
});
