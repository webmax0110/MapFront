(function() {
  'use strict';

  angular
    .module('gmapFront')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('map', {
        url: '/map',
        templateUrl: 'app/map/map.html',
        controller: 'MapController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
