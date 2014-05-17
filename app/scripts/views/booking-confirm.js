/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.BookingConfirmView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking-confirm.hbs'],

        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        },

        initialize : function(){
        	this.render();
        	this.listenTo(this.model,"change",this.render)
        }

    });

})();
