var bows = require('bows');

// api utils for querying
var api = require('../api');

var logger = bows('api.users');

var views = {
    register: function*(req, res){
        var userFound=false,
            newUser = {
                username: req.body.username,
                password: req.body.password
            };

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
    },
    login: function*(req, res){
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
    }
};

module.exports = views;
