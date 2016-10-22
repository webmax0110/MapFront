/**
 * Created by rootroot on 10/13/16.
 */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .factory('User', UserService);

  /** @ngInject */
  function UserService($resource, apiBasePath) {
    return $resource(apiBasePath + 'api/users/:controller', null,
    {
      get: {
        method: 'GET',
        params: {
          controller: 'profile'
        }
      }
    });
  }
})();
