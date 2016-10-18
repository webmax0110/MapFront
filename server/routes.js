/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {
  app.use(function(req, res, next) {
    next();
  });
  // Insert routes
  app.use('/auth', require('./auth'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/map', require('./api/map'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);
};
