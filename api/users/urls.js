var router = require('express').Router();
var axios = require('axios');
var bows = require('bows');
var co = require('co');

// api utils for querying
var userViews = require('./views');

var logger = bows('api.users');

router.get('/', function(req, res){
    res.json({'hello': 'users'});
});

router.post('/register', co.wrap(userViews.register));

router.post('/login', co.wrap(userViews.login));

module.exports = router;
