/*global restaurant, Backbone*/

restaurant.Routers = restaurant.Routers || {};

(function () {
    'use strict';

    restaurant.Routers.AppRouter = Backbone.Router.extend({

    	initialize: function(el) {
    		this.el = el ; // it's a jquery object

        // Initializing a collection of dishes
        this.dishesCollection = new restaurant.Collections.DishesCollection(); // This is where the hardcoded values should be replaced by a request to the backend server

        // Initializing all the views
        this.bookingView = new restaurant.Views.BookingView( {model : new restaurant.Models.BookingModel()} ); // Passing a Booking model to the BookingView
    		this.landingView = new restaurant.Views.LandingView(); // View that displays the landing page
        this.menuView = new restaurant.Views.MenuView({ collection : this.dishesCollection }); // View that displays the menu of the restaurant
        this.informationView = new restaurant.Views.InformationView(); // View that displays (fake) information about the restaurant.
    	},

    	currentView : null,

      switchView : function(view){

          var previous = this.currentView || null; // Stores the previous view
          var next = view ; // Stores the next view that will replace the current view

          if (previous){
              previous.transitionOut(function(){ // Transition out the previous view
                  previous.remove(); // Remove the bound events to the previous view
              })
          }

          next.render(); // First render the html into the .el property of the next view
          this.el.append(next.el); // Then, append it to the DOM
          next.transitionIn(); // When the View is ready, transition in

          this.currentView = next; // Set what was the next view to now be the current view
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
          return model.get("id") == id; // Finds the right model to give to the dish view
        });
        var view = new restaurant.Views.DishView({model : model});
        this.switchView(view);
      },

      showInformationView : function(){
          this.switchView(this.informationView);
      }

    });

})();
