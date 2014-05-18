/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.LandingView = Backbone.View.extend({

        template: JST['app/scripts/templates/landing.hbs'], 

        initialize : function(){
        	this.render();
        }, 

        render : function(){
        	this.$el.html(this.template());
        	return this;
        }

    });

})();
