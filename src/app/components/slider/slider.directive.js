(function() {
  'use strict';

  angular
    .module('gmapFront')
    .directive('homeSlider', homeSlider)
    .controller('SliderController', SliderController);

  /** @ngInject */
  function homeSlider($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/slider/slider.html',
      controller: SliderController,
      controllerAs: 'vm',
      link: function($scope, element, attrs) {
        $timeout(function(){
          $(element).find('.bxslider').bxSlider({
            auto: true,
            mode: 'fade'
          });
        });
      },
      bindToController: true
    };

    return directive;

    
  }

  /** @ngInject */
  function SliderController(mainSlider, srcBasePath, $log) {
    var vm = this;
    vm.homeslider = mainSlider;
    vm.path = srcBasePath + 'assets/sliders/';
  }

})();
