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


var rootDir = path.join(__dirname);

module.exports = settings.DEBUG ?
    require('./conf/webpack/dev.js')(rootDir) :
    require('./conf/webpack/prod.js')(rootDir);
