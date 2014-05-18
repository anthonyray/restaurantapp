/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.DishView = Backbone.View.extend({

        template: JST['app/scripts/templates/dish.hbs']

    });

})();
