/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.BookingMapView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking-map.hbs'],

        events : {
            'click .table' : "toggleTable"
        },

        initialize : function(){
        	this.render();
            this.listenTo(this.model, "change", this.render);
        },

        render : function(){
        	var self = this;
        	this.$el.html(this.template(this.model.toJSON()));
        	this.$(".table").each(function(){
        		var index = $( this ).text();
        		if (index == self.model.get("tableNumber")){
        			$(this).toggleClass("reserved");
        		}
        	})
        	return this;
        },

        toggleTable : function(e){ // Saves the number of the clicked table
            var table = $(e.currentTarget);
            this.model.set( {tableNumber : table.text()} );
        }

    });

})();
