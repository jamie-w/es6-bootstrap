var router = require('express').Router();
var bows = require('bows');

var logger = bows('api.users');

router.get('/', function(req, res){
    res.json({'hello': 'users'});
});

router.post('/register', function(req, res){
    logger('post vars', req.body);
    var newUser = {
        username: req.body.username,
    };

    return res.json({
        user: newUser,
        errors: false
    });
});

module.exports = router;
