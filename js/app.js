define(['jquery','backbone','marionette','underscore','view','formview','collection'],
	function($,Backbone,Marionette,_,AppView,FormView,todos){

		var ThingsToDo = new Backbone.Marionette.Application();
		
		ThingsToDo.addRegions({
		 	form:'#formHere',
		 	list:'#todolist'
		});

		ThingsToDo.addInitializer(function(){ 
			

	        ThingsToDo.list.show(new AppView({ collection: todos }) );
			ThingsToDo.form.show(new FormView({ collection: todos }) );	
		});

	

return ThingsToDo;
});
