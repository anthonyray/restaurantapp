/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.DishView = Backbone.View.extend({

        template: JST['app/scripts/templates/dish.hbs'], 
        className : "container",
        initialize : function(){
        	this.render();
        }, 

        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }

    });

})();
