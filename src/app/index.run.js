(function() {
  'use strict';

  angular
    .module('gmapFront')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, Auth, $log) {
    var authRedirect = $rootScope.$on('$stateChangeStart', function(event, next) {
      if (next.authenticate && !Auth.isAuthenticated()) {
        $state.go('login');
        event.preventDefault();
        return false;
      }
      $log.log(Auth.getRole());
      if (next.role > Auth.getRole())  {
        $state.go('home');
        event.preventDefault();
        return false;
      }
    });

    $rootScope.$on('$destroy', authRedirect);
  }

})();
