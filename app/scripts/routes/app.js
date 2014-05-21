/*global restaurant, Backbone*/

restaurant.Routers = restaurant.Routers || {};

(function () {
    'use strict';

    restaurant.Routers.AppRouter = Backbone.Router.extend({
    	
    	initialize: function(el) {
    		this.el = el ; // Is a jquery object
    		this.bookingView = new restaurant.Views.BookingView( {model : new restaurant.Models.BookingModel()} );
    		this.landingView = new restaurant.Views.LandingView();
            this.dishesCollection = new restaurant.Collections.DishesCollection();
            this.menuView = new restaurant.Views.MenuView({ collection : this.dishesCollection });
            this.informationView = new restaurant.Views.InformationView();
    	}, 

    	currentView : null,

    	/*switchView : function(view){
    		var previous = this.currentView || null
    		var next = view;
            
            if (previous){
    			previous.transitionOut(function(){
                    previous.remove();
                });
    		}

    		//next.render({page:true});

            // Move the view element into the DOM (replacing the old content)
    		this.el.append(next.el);
            //next.transitionIn();
    		// Render view after it is in the DOM (styles are applied)

    		this.currentView = next;
    	}, */

        switchView : function(view){

            var previous = this.currentView || null; 
            var next = view ; 

            if (previous){
                previous.transitionOut(function(){
                    previous.remove();
                })
            }

            next.render();
            this.el.append(next.el);
            next.transitionIn();

            this.currentView = next;
        },

    	routes : {
    		"booking" : "showBookingView",
            "menu" : "showMenuView",
            "dish/:id" : "showDishView",
            "informations" : "showInformationView",
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
        }, 
        showInformationView : function(){
            this.switchView(this.informationView);
        }

    });

})();
