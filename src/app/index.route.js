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
        controllerAs: 'vm',
        role: 0
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        role: 0
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        authenticate: true,
        role: 1
      })
      .state('address', {
        url: '/address',
        templateUrl: 'app/map/map.html',
        controller: 'MapController',
        controllerAs: 'vm',
        role: 2
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        authenticate: true,
        role: 1
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        authenticate: true,
        role: 1
      });

    $urlRouterProvider.otherwise('/');
  }

})();
