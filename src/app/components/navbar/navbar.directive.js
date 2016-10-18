(function() {
  'use strict';

  angular
    .module('gmapFront')
    .directive('acmeNavbar', acmeNavbar)
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    
  }

  /** @ngInject */
  function NavbarController(moment, Auth, $location) {
    var vm = this;
    vm.loggedin = Auth.isAuthenticated();
    vm.isActive = function(url) {
      return url === $location.path();
    };
    // "vm.creationDate" is available by directive option "bindToController: true"
    vm.relativeDate = moment(vm.creationDate).fromNow();
  }

})();
