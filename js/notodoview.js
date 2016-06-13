define(['jquery','backbone','marionette','underscore','text!notodotemplate.html'],
	function($,Backbone,Marionette,_,notodotemplate){

var	NoTodoView=Backbone.Marionette.ItemView.extend({
			template: _.template(notodotemplate)

		});
return NoTodoView;
});
