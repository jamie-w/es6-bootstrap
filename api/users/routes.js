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

// we see `co.wrap` because they use generators to query
// an external api

router.post('/register', co.wrap(userViews.register));

router.post('/login', co.wrap(userViews.login));

router.post('/logout', userViews.logout);

module.exports = router;
