var router = require('express').Router();
var path = require('path');

router.use('/users', require('./users'));
router.use('/chats', require('./chats'));

router.get('/', function(req, res){
    if(req.xhr)
        res.json({'hello': 'api'});
    else
        res.sendFile(path.join(__dirname+'/api.html'));
});

module.exports = router;
