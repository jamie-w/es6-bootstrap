
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(rootDir){
    var config = require('./base.js')(rootDir);
    config.plugins = [new ExtractTextPlugin('styles.css', {allChunks: false})];
    return config;
};

