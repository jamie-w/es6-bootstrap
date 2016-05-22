var settings = require('./settings.js');
var app = require('./app');

// open up to the world
app.listen(settings.PORT, function () {
    console.log('Example app listening at http://localhost:'+settings.PORT);
});
