define(['jquery','backbone','marionette','underscore','todoview','notodoview','collection','text!maintemplate.html'],
	function($,Backbone,Marionette,_,TodoView,NoTodoView,todos,maintemplate){



	

	var AppView = Backbone.Marionette.CompositeView.extend({
		
		childView: TodoView,
		
		ChildViewContainer: '#m',
		
		emptyView: NoTodoView,
		
		template:  _.template(maintemplate),
		onBeforeRender: function(){
			todos.fetch();
		}	

	
	});
	return AppView;



});