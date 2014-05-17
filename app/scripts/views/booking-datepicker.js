/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.BookingDatepickerView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking-datepicker.hbs'],

        initialize : function(){
        	var self = this;
            this.render();
        	
            this.$("#datepicker").datepicker({autoclose : true}).on('changeDate', function(e){
                self.model.set( {bookingDate : e.date} );
            });
        },

        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        } 

    });

})();
