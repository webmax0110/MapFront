/**
 * Created by rootroot on 10/13/16.
 */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .controller('MapController', MapController);

  /** @ngInject */
  function MapController($state, $scope, Auth, NgMap, MapService) {
    var vm = this;
    // if (!Auth.isAuthenticated()) {
    //   $state.go('login');
    //   return;
    // }
    vm.addlocation = function(location){
      MapService.post(location, function(data){
        vm.addresses.push(data);
      });
    };
    MapService.get(function(data){
      vm.addresses = data;
    });
    // NgMap.getMap().then(function(map) {
    // });
  }
})();
