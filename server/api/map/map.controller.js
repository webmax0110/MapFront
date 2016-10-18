'use strict';

var _ = require('lodash');
var Maps = require('./map.model');

var validationError = function(res, err) {
  return res.status(422).json(err);
};

var handleError = function(res, err) {
  return res.status(500).send(err);
}

// Get list of locations
exports.index = function(req, res) {
  if (req.user.role == "admin")
  {
    Maps.find({}, function (err, locations) {
      if(err) { return handleError(res, err); }

      return res.status(200).json(locations);
    });
  }
  else
  {
    Maps.find({ userId: req.user.id }, function (err, locations) {
      if(err) { return handleError(res, err); }

      return res.status(200).json(locations);
    });
  }
};

// Get a single locations
exports.show = function(req, res) {
  if (req.user.role == "admin")
  {
    Maps.findById(req.params.id, function (err, location) {
      if(err) { return handleError(res, err); }
      if(!location) { return res.sendStatus(404); }

      return res.json(location);
    });
  }
  else
  {
    Maps.findOne({ userId: req.user.id, _id: req.params.id }, function (err, location) {
      if(err) { return handleError(res, err); }
      if(!location) { return res.sendStatus(404); }

      return res.json(location);
    });
  }
};

// Creates a new location in the DB
exports.create = function(req, res) {
  var newNote = new Maps(req.body);
  if (req.user.role != "admin") newNote.userId = req.user.id;
  if (!newNote.userId) return res.sendStatus(422);

  Maps.create(newNote, function(err, location) {
    if (err) return validationError(res, err);
    
    return res.status(201).json(location);
  });
};

// Updates an existing location in the DB
exports.update = function(req, res) {
  if (req.body._id) { delete req.body._id; }

  if (req.user.role == "admin")
  {
    Maps.findById(req.params.id, function (err, location) {
      if (err) return handleError(res, err);
      if(!location) return res.sendStatus(404);

      var updated = _.merge(location, req.body);
      updated.save(function (err) {
        if (err) return handleError(res, err);
        return res.status(200).json(location);
      });
    });
  }
  else
  {
    Maps.findOne({ userId: req.user.id, _id: req.params.id }, function (err, location) {
      if (err) return handleError(res, err);
      if(!location) return res.sendStatus(404);

      var updated = _.merge(location, req.body);
      updated.save(function (err) {
        if (err) return handleError(res, err);
        return res.status(200).json(location);
      });
    });
  }
};

// Deletes a location from the DB
exports.destroy = function(req, res) {
  if (req.user.role == "admin")
  {
    Maps.findById(req.params.id, function (err, location) {
      if(err) { return handleError(res, err); }
      if(!location) { return res.sendStatus(404); }

      location.remove(function(err) {
        if(err) { return handleError(res, err); }
        return res.sendStatus(204);
      });
    });
  }
  else
  {
    Maps.findOne({ userId: req.user.id, _id: req.params.id }, function (err, location) {
      if (err) { return handleError(res, err); }
      if (!location) { return res.sendStatus(404); }

      location.remove(function(err) {
        if(err) { return handleError(res, err); }
        return res.sendStatus(204);
      });
    });
  }
};