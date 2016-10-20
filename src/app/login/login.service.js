/**
 * Created by rootroot on 10/13/16.
 */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .factory('Auth', Auth);

  /** @ngInject */
  function Auth($http, $cookies,$q, apiBasePath, User) {
    var vm = this;
    var deferred = $q.defer();
    return {
      login: function(user, callback) {
          var cb = callback || angular.noop;
          $http.post(apiBasePath + 'auth/local/', {
            email: user.email,
            password: user.password
          })
          .success(function(data) {
            deferred.resolve(data);
            $cookies.put('access_token', data.token);
            $cookies.put('userRec', angular.toJson(data.userRec));
            var user_info = User.get();
            if (user_info.hasOwnProperty('$promise')) {
              user_info.$promise.then(function(){
                $cookies.put('user_info', JSON.stringify(user_info));  
                  vm.loggedin = true;
              });
            }
            return cb(data);
          })
          .error(function(err) {
            deferred.reject(err);

            return cb(err);
          }.bind(this));
          return deferred.promise;
      },
      logout: function() {
        $cookies.remove('access_token');
        $cookies.remove('user_info');
        return deferred.promise;
      },

      getRole: function(){
        if ($cookies.get('user_info')) {
          var currentUser = JSON.parse($cookies.get('user_info'));
          return currentUser.role;
        }
        else {
          return false;
        }
      },

      isAuthenticated: function() {
        return (typeof $cookies.get('access_token') !== 'undefined' && $cookies.get('access_token') !== null);
      },

      defaultState: function() {
        return 'home';
      }
    };
  }
})();
