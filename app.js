var settings = require('./settings.js');
var server = require('./server');

// open up to the world
server.listen(settings.PORT, function () {
    console.log('Example app listening at http://localhost:'+settings.PORT);
});
