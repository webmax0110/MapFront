(function() {
  'use strict';

  angular
    .module('gmapFront')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);


  }


})();
