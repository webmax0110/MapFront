'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MapsSchema = new Schema({
  userId: {type: String}, 
  location: {type: String},
  description: {type: String}
});

/**
 * Validations
 */
var isExisting = function(value) {
  return value && value.length;
};

MapsSchema
  .path('location')
  .validate(function(location) {
    return isExisting(location);
  }, 'map entry can not be saved without location.');

module.exports = mongoose.model('Maps', MapsSchema);
