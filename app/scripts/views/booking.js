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
        	var self = this;
        	this.render();
        	this.$("#datepicker").datepicker({autoclose : true}).on('changeDate', function(e){
        		self.model.set({bookingDate : e.date});
        	});
        	this.listenTo(this.model,'change',this.dosmthg)
        }, 

        dosmthg : function(){
        	alert('Changed a booking information');
        }

    });

})();
