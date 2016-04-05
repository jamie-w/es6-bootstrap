var router = require('express').Router();

router.get('/', function(req, res){
    res.json({'hello': 'users'});
});

module.exports = router;
