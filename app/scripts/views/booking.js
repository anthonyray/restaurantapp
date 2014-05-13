/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {}; 

(function () {
    'use strict';

    restaurant.Views.BookingView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking.hbs'], 

        render : function(){
        	this.$el.html(this.template());
        	return this;
        },

        initialize : function(){
        	this.render();
        	this.$("#datepicker").datepicker({autoclose : true});
        }

    });

})();
