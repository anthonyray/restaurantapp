/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {}; 

(function () {
    'use strict';

    restaurant.Views.BookingView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking.hbs'], 
        
        
        render : function(){
            this.destroyViews();

            
            this.$el.html(this.template());
            this.subviews = [
                new restaurant.Views.BookingDatetitleView({el : "#booking-datetitle", model : this.model}),
                new restaurant.Views.BookingDatepickerView({el : "#booking-datepicker", model : this.model}),
                new restaurant.Views.BookingConfirmView({el : "#booking-confirm", model : this.model}),
                ];
        	return this;
        },

        initialize : function(){
        	var self = this;
        	
            this.subviews = []; // Placeholder for sub-views

            this.render();
            
            
        },

        destroyViews : function(){
            _.invoke(this.views, 'destroy');
            this.subviews.length = 0;
        }, 

        toggleTable : function(e){
            var table = $(e.currentTarget);
            table.toggleClass("reserved");
        }

    });

})();
