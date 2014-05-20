/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {}; 

(function () {
    'use strict';

    restaurant.Views.BookingView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking.hbs'], 
        className : "container",
        
        render : function(){
            this.destroyViews(); // Deleting the subviews to avoid memory leaks

            
            this.$el.html(this.template());
            this.subviews = [ // Hardcoding all the subviews. Every subview has the BookingModel as a property
                new restaurant.Views.BookingDatetitleView({el : "#booking-datetitle", model : this.model}),
                new restaurant.Views.BookingDatepickerView({el : "#booking-datepicker", model : this.model}),
                new restaurant.Views.BookingConfirmView({el : "#booking-confirm", model : this.model}),
                new restaurant.Views.BookingMapView({el : "#booking-map", model : this.model})
                ];
        	return this;
        },

        initialize : function(){
        	var self = this;
        	
            this.subviews = []; // Placeholder for sub-views

            this.render();
            
            
        },

        destroyViews : function(){
            _.invoke(this.views, 'destroy'); // Destroys subviews
            this.subviews.length = 0; // Quick way to empty a table. 
        }

    });

})();
