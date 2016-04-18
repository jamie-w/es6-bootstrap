var bows = require('bows');

var settings = function(){
    switch(process.env.NODE_ENV){
        case 'PROD':
            return require('./settings.prod.js');
        case 'TEST':
            return require('./settings.test.js');
        default:
            return require('./settings.dev.js');
    }
}();

var conf = {
    API_ROOT: settings.api_url
}
bows('settings')(conf);

module.exports = conf;
