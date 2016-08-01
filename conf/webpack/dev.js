var webpack = require('webpack');

module.exports = function(rootDir){

    // get the base config (will apply to all environments)
    var config = require('./base.js')(rootDir);

    // provide overrides and additional config as needed.
    config.entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
    config.plugins = [new webpack.HotModuleReplacementPlugin()];

    // this is the final config
    return config;
};
