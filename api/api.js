var axios = require('axios');
var settings = require('../settings');
var bows = require('bows');

var logger = ('api.apiCall');

const GENERIC_ERROR = 'Problem fulfilling request';

var ApiCall = function(){
    this.method = false;
    this.headers = [];
    this.url = false;

}

ApiCall.prototype = {
    constructor: ApiCall,
    error: false,
    async: function(params){
        var self = this;
        self._getParams(params);
        self._validate();
        if(self.error)
            return {errors: [self.error]};

        return new Promise(function(resolve, reject){
            axios[self.method](self.url, self.params)
                .then(function(res){
                    resolve(res);
                })
                .catch(function(res){
                    resolve(res);
                });
        });
    },
    _getParams: function(params){
        var self = this;
        for(var key in params){
            if(key == 'url')
                params[key] = settings.API_ROOT + params[key];
            self[key] = params[key];
        }
    },
    _validate: function(){
        if(!(this.method && this.url)){
            logger('Required: method, url, res');
            this.error = GENERIC_ERROR;
        }
    }
}

module.exports = (new ApiCall);
