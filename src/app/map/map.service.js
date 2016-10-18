/**
 * Created by rootroot on 10/13/16.
 */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .service('MapService', MapService);

  /** @ngInject */
  function MapService($http, $q, Auth, apiBasePath) {
    var get = function (callback) {
      $http.get(apiBasePath + 'api/map/')
        .then(function (response) {
          callback (response.data);
        });
    };
    var post = function (address, callback) {
      var cb = callback || angular.noop;
      var deferred = $q.defer();
      $http.post(apiBasePath + 'api/map/', {
        userID:1,
        location:address
      })
      .success(function (response) {
        deferred.resolve(response);
        callback (response);
      })
      .error(function(err) {
        deferred.reject(err);
        return cb(err);
      }.bind(this));
      return deferred.promise;
    };
    return  {
        get: get,
        post: post
    };
  }
})();
