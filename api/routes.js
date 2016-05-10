var router = require('express').Router();
var path = require('path');

router.use('/users', require('./users/urls'));
router.use('/chats', require('./chats/urls'));

router.get('/', function(req, res){
    if(req.xhr)
        res.json({'hello': 'api'});
    else
        res.sendFile(path.join(__dirname+'/api.html'));
});

module.exports = router;
