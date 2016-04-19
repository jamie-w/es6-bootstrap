var bows = require('bows');

var settings = function(){
    switch(process.env.NODE_ENV){
        case 'PROD':
            return require('./conf/prod.js');
        case 'TEST':
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
