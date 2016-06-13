'use strict';

require.config({
	baseUrl: "js/",
	
	shim: {
    jquery: {
    	exports: '$'
    },
    underscore: {
    	exports: '_'
    },

    backbone: {
    	deps: ['underscore', 'jquery'], 
    	exports: 'Backbone'
    },
    
    backbonelocalStorage : { 
    	exports: 'LocalStorage'
    },

    marionette: {
    	deps:['backbone'], 
    	exports: 'Marionette'
    },
   

    'baseapp': {
    	deps:['jquery','underscore','backbone','marionette','backbonelocalStorage']
	}
  },
	paths:{
		text: 'libs/require-text',
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		backbonelocalStorage: 'libs/backbone.localStorage',
		marionette: 'libs/backbone.marionette',
 		
		'baseapp': 'app'

	}

	
});

require(["baseapp","marionette"],
	function(app,Marionette){
		
            app.start();
		   
	});