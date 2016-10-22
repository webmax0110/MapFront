(function() {
  'use strict';

  angular
    .module('gmapFront')
    .directive('acmeFooter', acmeFooterbar)
    .controller('FooterbarController', FooterbarController);

  /** @ngInject */
  function acmeFooterbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footerbar/footernav.html',
      controller: FooterbarController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }

  /** @ngInject */
  function FooterbarController() {
  }

})();
