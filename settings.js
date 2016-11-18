var logger = require('bows')('settings');

var conf = function(){
    switch(process.env.NODE_ENV){
        case 'prod':
            return require('./conf/settings/prod.js');
        case 'test':
            return require('./conf/settings/test.js');
        default:
            return require('./conf/settings/dev.js');
    }
}();

var settings = {
    API_ROOT: conf.api_url,
    PORT: conf.port ? conf.port : 3000,
    DEBUG: conf.debug ? conf.debug : false,
    TEST_API: conf.test_api ? conf.test_api : false,
}

/**
 * Let's format our errors a little better, shall we?
*/
if(settings.DEBUG){
    Error.prepareStackTrace = function (err, frames) {
        var lines = [err.toString()];

        lines.push.apply(lines, frames.map(function(frame) {
            return '    at ' + frame.toString();
        }));

        return lines.join('\n');
    }

}

logger(settings);

module.exports = settings;
