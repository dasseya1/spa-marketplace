// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we use to give our server useful functionality
// ==============================================================================
// var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var errorHandler = require('errorhandler');
// var morgan = require('morgan');
// var routes = require('./data');
// var api = require('./data/apiRoutes');
// // ==============================================================================
// // EXPRESS CONFIGURATION
// // This sets up the basic properties for our express server
// // ==============================================================================
//
// // Tells node that we are creating an "express" server
// var app = module.exports = express();
//
// // Sets an initial port. We"ll use this later in our listener
// var PORT = process.env.PORT || 3000;
// var env = process.env.NODE_ENV;
// if ('development' == env) {
//   app.use(errorHandler({
//     dumpExceptions: true,
//     showStack: true
//   }));
// }
//
// if ('production' == app.get('env')) {
//   app.use(errorHandler());
// }
//
// // BodyParser makes it possible for our server to interpret data sent to it.
// // The code below is pretty standard.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({
//   type: "application/vnd.api+json"
// }));
//
// //Render html file for view
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use(morgan('dev'));
// app.use(methodOverride());
// app.use(express.static(__dirname + '/'));
// app.use('/build', express.static('public'));
//
// // ================================================================================
// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// // ================================================================================
//
// app.get('/', routes.index);
// app.all('/api/items', api.items);
// app.all('/api/items/:itemId', api.item)
//
// // ==============================================================================
// // LISTENER
// // The below code effectively "starts" our server
// // ==============================================================================
//
// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });
var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    morgan         = require('morgan'),
    routes         = require('./data'),
    api            = require('./data/apiRoutes');
var app = module.exports = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/'));
app.use('/build', express.static('public'));

var env = process.env.NODE_ENV;
if ('development' == env) {
  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
}

if ('production' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', routes.index);
app.all('/api/items', api.items);
app.all('/api/items/:itemId', api.item)

app.listen(8080);
console.log('Magic happens on port 8080...');
