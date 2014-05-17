/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.MapView = Backbone.View.extend({

        template: JST['app/scripts/templates/table.hbs'], 

        render : function() {

        }, 

        initialize : function(){
        	this.listenTo(restaurant.tables,'add',this.addOne);
            this.render();
        }, 

        addOne : function(table)
        {
            alert('Gratata');
        }

    });

})();
