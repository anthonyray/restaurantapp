/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.BookingDatetitleView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking-datetitle.hbs'], 

        initialize : function(){
        	this.render();
            this.listenTo(this.model, "change", this.render);
        },

        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }

    });

})();
