define(['jquery','backbone','marionette','underscore','model','text!todotemplate.html'],
	function($,Backbone,Marionette,_,model,todotemplate){



	
		var TodoView=Backbone.Marionette.ItemView.extend({
			
			template: _.template(todotemplate),
			events:{
				'click #clr' : 'clear'
			},
			
			clear:function(){

				var r =confirm("Are you sure you want to clear your list?");
				if (r==true){
         			
						this.model.destroy();

					
				}
			}



		});

	    return TodoView;
		

});