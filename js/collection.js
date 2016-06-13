define(['backbone','backbonelocalStorage','model'],function(Backbone,LocalStorage,todo){



	
	var Todos = Backbone.Collection.extend({
		model: todo,
		localStorage: new Backbone.LocalStorage("todos-backbone")

	});
	var  todos= new Todos();
return todos;
});