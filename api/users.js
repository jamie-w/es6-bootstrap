var router = require('express').Router();
var bows = require('bows');

var data = require('./data');

var logger = bows('api.users');

router.get('/', function(req, res){
    res.json({'hello': 'users'});
});

router.post('/register', function(req, res){
    var userFound=false,
        newUser = {
            username: req.body.username,
            password: req.body.password
        };

    data.users.forEach(function(user){
        if(user.username == newUser.username)
            return userFound = true;
    });

    if(userFound)
        return res.json({errors:'Username already exists'});

    // save the new user to the list
    data.users.push(newUser);

    return res.json({
        user: newUser,
        msg: 'Successfully registered!',
        errors: false
    });
});

router.post('/login', function(req, res){
    var userFound = false,
        username = req.body.username,
        password = req.body.password;

    // check that the username+password exist
    data.users.forEach(function(user){
        if(user.username == username &&
            user.password == password)
            return userFound = true;
    });

    if(userFound)
        return res.json({
            user: {
                username: username
        }});
    else
        return res.json({
            errors: 'User not found'
        });
});

module.exports = router;
