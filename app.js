require('babel-polyfill');
var app = require('express')();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var path = require('path');
var bows = require('bows');
var csrf = require('csurf');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');

var settings = require('./settings');
var logger = bows("app");

// Some important variables
var compiler = webpack(webpackConfig);

if(settings.DEBUG) // test and dev
{
    // browser hot reloading
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackHotMiddleware = require("webpack-hot-middleware");
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
}


/*
// Using session proved tenuous when dealing with
// csrf requests. Cookies will be used for the
// authentication and csrf requests.
app.use(session({
    secret: 'Secret mission session!',
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: !settings.DEBUG,
    }
}));
*/

// Seems we have to use cookies because the session is
// server side and loses the csrf on sequential requests
app.use(cookieParser());
app.use(csrf({cookie:true}));

// to parse post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// divert authentication requests
app.use(passport.initialize());

// divert api requests
app.use('/api', require('./api/routes'));

// create the react app
app.get('*', function (req, res) {
    var render = require('./index.html');
    var params = {
        csrfToken: req.csrfToken(),
        currUser: req.cookies['currUser']
    };
    return res.send(render(params));
});

app.listen(settings.PORT, function () {
    console.log('Example app listening at http://localhost:'+settings.PORT);
});

// module.exports = app;
