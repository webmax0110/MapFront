/**
 * Created by rootroot on 10/13/16.
 */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .service('ProfileService', ProfileService);

  /** @ngInject */
  function ProfileService($http, $q, Auth, apiBasePath) {
    var get = function (callback) {
      $http.get(apiBasePath + 'api/users/profile')
        .then(function (response) {
          callback (response.data);
        });
    };
    var update = function (formData, callback) {
      var cb = callback || angular.noop;
      var deferred = $q.defer();
      $http.post(apiBasePath + 'api/users/profile', formData)
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
        update: update
    };
  }
})();
