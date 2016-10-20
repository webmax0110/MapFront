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
  function NavbarController($rootScope, moment, Auth, $location, $cookies, nav_menu, $log) {
    var vm = this;
    var scope = $rootScope;
    scope.$watch(function() { 
      return $cookies.get('user_info'); 
    }, function(newValue) {
      vm.loggedin = Auth.isAuthenticated();
      vm.nav_menu = nav_menu;
      vm.access_level = 0;
      vm.access_level = Auth.getRole();
    });
    

    vm.isActive = function(url) {
      return url === $location.path();
    };
    // "vm.creationDate" is available by directive option "bindToController: true"
    vm.relativeDate = moment(vm.creationDate).fromNow();
  }

})();
