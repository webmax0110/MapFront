(function() {
  'use strict';

  angular
    .module('gmapFront')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($state, Auth) {
    var vm = this;
    vm.login_error = false;
    if ($state.current.name == 'logout') {
      Auth.logout();
      $state.go('login');
    }
    vm.login = function(user) {
      Auth.login(user, function(data){
        if (data.message) {
          vm.login_error = true;
          vm.error_message = data.message;
        }
      }).then(function() {
        $state.go(Auth.defaultState());
      });
    }
  }
})();
