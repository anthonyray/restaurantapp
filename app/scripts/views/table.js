/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.TableView = Backbone.View.extend({

        template: JST['app/scripts/templates/table.hbs'], 
        render : function(){
        	this.$el.html(this.template());
        	return this;
        },
        initialize : function(){
        	console.log("Initialize table view");
        }

    });

})();
