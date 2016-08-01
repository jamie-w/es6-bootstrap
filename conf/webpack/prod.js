var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(rootDir){

    // get the base config (will apply to all environments)
    var config = require('./base.js')(rootDir);

    // provide overrides and additional config as needed.
    config.plugins = [new ExtractTextPlugin('styles.css', {allChunks: false})];

    // this is the final config
    return config;
};

