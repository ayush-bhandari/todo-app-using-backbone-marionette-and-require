define(['jquery','backbone','marionette','underscore','collection','backbonelocalStorage','model','text!formtemplate.html'],
	function($,Backbone,Marionette,_,todos,LocalStorage,todo,formtemplate){

       var FormView=Backbone.Marionette.ItemView.extend({
			template: _.template(formtemplate),
			events:{
				'click #sub' : 'submit'
					
			},

			ui:{
   				title: '#titl',
   				todo: '#todo',
   				deadline: '#date'
   			},

   		    
			submit: function(){
				

   			if((this.ui.title.val()=="Title")||(this.ui.todo.val()=="Things to do") || (this.ui.deadline.val()=="")){
                  $("#errorMessage").text("Please provide title, things to do and a deadline!").show().fadeOut(5000);
                  
               }else{
                  
                   var abc= new todo({
                    title: this.ui.title.val().toString().toUpperCase(),
                     todo: this.ui.todo.val(),
                     deadline: this.ui.deadline.val()
               });
                
               todos.add(abc);
               abc.save();
               this.ui.title.val("");
               this.ui.todo.val("");
               this.ui.deadline.val("");
               $("#errorMessage").text("Success!!").show().fadeOut(5000);
               }
   				
   				
			},


		});

 return FormView;
});