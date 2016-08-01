var webpack = require('webpack');

module.exports = function(rootDir){
    var config = require('./base.js')(rootDir);
    config.entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
    config.plugins = [new webpack.HotModuleReplacementPlugin()];
    return config;
};
