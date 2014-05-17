/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {}; 

(function () {
    'use strict';

    restaurant.Views.BookingView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking.hbs'], 
        
        events : {
            'click #table' : "toggleTable"
        },
        
        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        },

        initialize : function(){
        	var self = this;
        	
            this.render();
            
            this.$("#datepicker").datepicker({autoclose : true}).on('changeDate', function(e){
                self.model.set( {bookingDate : e.date} );
            });
        }, 

        toggleTable : function(e){
            var table = $(e.currentTarget);
            table.toggleClass("reserved");
        }

    });

})();
