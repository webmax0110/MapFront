/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gmapFront')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('apiBasePath', 'http://localhost:3000/')
    .constant('srcBasePath', 'http://localhost:3001/')
    .constant('nav_menu', {
    	home : {
    		title:'Home',
			access:0,
            state:'home',
			url : '/'
    	},
    	about : {
    		title:'About',
            state:'about',
    		access:1,
			url : '/about'
    	},
    	address : {
    		title:'Address',
            state:'address',
    		access:2,
			url : '/address'
    	},
    	profile : {
    		title:'Profile',
            state:'profile',
    		access:1,
			url : '/profile'
    	}
    })
    .constant('mainSlider', {
        image1 : {
            src:'img00.jpg'
        },
        image2 : {
            src:'img01.jpg'
        },
        image3 : {
            src:'img02.jpg'
        },
        image4 : {
            src:'img03.jpg'
        },
        image5 : {
            src:'img04.jpg'
        },
        image6 : {
            src:'img05.jpg'
        }
        });
})();
