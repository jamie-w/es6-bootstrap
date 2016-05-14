var router = require('express').Router();
var path = require('path');

router.use(function(req, res, next){
    if(!req.xhr){
        res.sendFile(path.join(__dirname+'/api.html'));
    }
    else{
        next();
    }
});

router.use('/users', require('./users/urls'));
router.use('/chats', require('./chats/urls'));

module.exports = router;
