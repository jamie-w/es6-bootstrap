/**
 * Load the appropriate config from webpack based on the settings
 */

var settings = require('./settings.js');
var bows = require('bows');
var path = require('path');


// this file is required at the root, so pass the rootDir into
// sub folders
// TODO look into cleaner ways of handling this.
var rootDir = path.join(__dirname);

if(settings.DEBUG){
    var webpack = require('./conf/webpack/dev.js')(rootDir);
} else {
    var webpack = require('./conf/webpack/prod.js')(rootDir);
}

module.exports = webpack;
