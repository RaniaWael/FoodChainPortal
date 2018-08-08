// // var express = require('express');
// // var path = require('path');
// // var app = express();
// // var bodyParser = require('body-parser');
// require('./app.js')(app);
// // module.exports = app;
// app.use(express.static('FoodChainPortal')).listen(8080);

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
// your normal configuration like `app.use(express.bodyParser());` here
// ...
//app.use(app.router);
app.get('*',function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendfile(path.resolve('app/index.html'));
}).listen(8080);
