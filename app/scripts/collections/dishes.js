/*global restaurant, Backbone*/

restaurant.Collections = restaurant.Collections || {};

(function () {
    'use strict';

    restaurant.Collections.DishesCollection = Backbone.Collection.extend({

        model: restaurant.Models.DishesModel

    });

})();
