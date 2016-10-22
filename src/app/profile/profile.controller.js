(function() {
  'use strict';

  angular
    .module('gmapFront')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController(ProfileService) {
  	var vm = this;
  	ProfileService.get(function(data){
      vm.profile = data;
    });

    var updateProfile = function() {
    	ProfileService.update(vm.formData, function(data){
    		vm.profile = data;
    	});
    }
  }
})();
