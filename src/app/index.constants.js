/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('apiBasePath', 'http://localhost:3000/')
    .constant('nav_menu', {
    	home : {
    		title:'Home',
			access:0,
			url : '/'
    	},
    	about : {
    		title:'About',
    		access:1,
			url : '/about'
    	},
    	address : {
    		title:'Address',
    		access:2,
			url : '/map'
    	},
    	profile : {
    		title:'Profile',
    		access:1,
			url : '/profile'
    	}
    });
})();
