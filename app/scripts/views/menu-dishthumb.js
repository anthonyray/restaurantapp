/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.MenuDishthumbView = Backbone.View.extend({

        template: JST['app/scripts/templates/menu-dishthumb.hbs'],

        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        },

        initialize : function(){
        	this.render();
        }

    });

})();
