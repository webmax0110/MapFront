(function() {
  'use strict';

  angular
    .module('gmapFront')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(mainSlider, srcBasePath) {
  	var vm = this;
  	vm.homeSlider = mainSlider;
  	vm.image_path = srcBasePath + '/assets/sliders';

  }
})();
