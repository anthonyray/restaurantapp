/*global restaurant, Backbone*/

restaurant.Routers = restaurant.Routers || {};

(function () {
    'use strict';

    restaurant.Routers.AppRouter = Backbone.Router.extend({
    	
    	initialize: function(el) {
    		this.el = el ; 
    		this.bookingView = new restaurant.Views.BookingView({model : new restaurant.Models.BookingModel()} );
    		this.landingView = new restaurant.Views.LandingView();
            this.dishesCollection = new restaurant.Collections.DishesCollection();
            this.menuView = new restaurant.Views.MenuView({ collection : this.dishesCollection });
            console.log(this.el);   
    	}, 

    	currentView : null,

    	switchView : function(view){
    		
    		if (this.currentView){
    			this.currentView.remove();
    		}

    		// Move the view element into the DOM (replacing the old content)
    		this.el.html(view.el);

    		// Render view after it is in the DOM (styles are applied)
    		view.render();

    		this.currentView = view;
    	}, 

    	routes : {
    		"booking" : "showBookingView",
            "menu" : "showMenuView",
            "dish/:id" : "showDishView",
    		'': 'landing'
    	},

    	showBookingView : function(){
    		this.switchView(this.bookingView)
    	},

    	landing : function(){
    		this.switchView(this.landingView);
    	}, 

        showMenuView : function(){
            this.switchView(this.menuView);
        },

        showDishView : function(id){
            
            var model = this.dishesCollection.find(function(model){
                return model.get("id") == id;
            });
            var view = new restaurant.Views.DishView({model : model});
            this.switchView(view);
        }

    });

})();
