var router = require('express').Router();
var path = require('path');
var bows = require('bows');

var logger = bows('api.routes');

// validate request
router.use(function(req, res, next){
    if(!req.xhr){
        return res.sendFile(path.join(__dirname+'/api.html'));
    }
    else{
        next();
    }
});

router.use('/users', require('./users/routes'));
router.use('/chats', require('./chats/urls'));

module.exports = router;
