var bows = require('bows');

var settings = function(){
    switch(process.env.NODE_ENV){
        case 'prod':
            return require('./conf/prod.js');
        case 'test':
            return require('./conf/test.js');
        default:
            return require('./conf/dev.js');
    }
}();

var conf = {
    API_ROOT: settings.api_url
}
bows('settings')(conf);

module.exports = conf;
