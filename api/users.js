var router = require('express').Router();
var axios = require('axios');
var bows = require('bows');
var co = require('co');


// api utils for querying
var api = require('./api');

var logger = bows('api.users');

router.get('/', function(req, res){
    res.json({'hello': 'users'});
});

router.post('/register', co.wrap(function*(req, res){
    var userFound=false,
        newUser = {
            username: req.body.username,
            password: req.body.password
        };

    logger('checking it exists');
    var exists = yield api.async({
        url: '/users?username='+newUser.username,
        method: 'get',
    });
    if(exists.data.length)
        return res.json({errors:'User already exists'});

    var response = yield api.async({
        url: '/users',
        method: 'post',
        params: newUser
    });
    res.json(response.data);
    done();
}));

router.post('/login', co.wrap(function*(req, res){
    var userFound = false,
        username = req.body.username,
        password = req.body.password;

    // check that the username+password exist
    var response = yield api.async({
        url: '/users?username=' + username,
        method: 'get',
    });

    if(response.data.length && response.data[0].password == password)
        res.json({
            user: response.data[0]
        });
    else
        res.json({
            errors: 'User not found'
        });
    done();
}));

module.exports = router;
