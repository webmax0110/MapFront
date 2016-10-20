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
            src:'/assets/sliders/img00.jpg',
            slides: {
                p : "Lorem ipsum dolor sit amet"
            }
        },
        image2 : {
            src:'/assets/sliders/img01.jpg',
            slides: {
                p : "Lorem ipsum dolor sit amet"
            }
        },
        image3 : {
            src:'/assets/sliders/img02.jpg',
            slides: {
                p : "Lorem ipsum dolor sit amet"
            }
        },
        image4 : {
            src:'/assets/sliders/img03.jpg',
            slides: {
                p : "Lorem ipsum dolor sit amet"
            }
        },
        image5 : {
            src:'/assets/sliders/img04.jpg',
            slides: {
                p : "Lorem ipsum dolor sit amet"
            }
        },
        image6 : {
            src:'/assets/sliders/img05.jpg',
            slides: {
                p : "Lorem ipsum dolor sit amet"
            }
        }
        });
})();
