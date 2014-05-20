/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.InformationView = Backbone.View.extend({

        template: JST['app/scripts/templates/information.hbs'],
        className : "container",
        initialize : function(){
        	this.render();
        }, 

        render : function(){
        	this.$el.html(this.template());
        	return this;
        }

    });

})();
