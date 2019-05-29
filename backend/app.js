const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes  = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Bind routes to the controller
routes.bindRoutes(app, '/api');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  if (err instanceof Error) {
    return res.status(460).json({ message: err.message});
  }
  res.status(err.status || 500).json({ message: 'Internal server error.'});
});


module.exports = app;
