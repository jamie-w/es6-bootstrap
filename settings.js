var bows = require('bows');

var conf = function(){
    switch(process.env.NODE_ENV){
        case 'prod':
            return require('./conf/prod.js');
        case 'test':
            return require('./conf/test.js');
        default:
            return require('./conf/dev.js');
    }
}();

var one_day = 24 * 60 * 60 * 1000;

var settings = {
    API_ROOT: conf.api_url,
    PORT: conf.port ? conf.port : 3000,
    DEBUG: conf.debug ? conf.debug : false,
}

bows('settings')(settings);

module.exports = settings;
