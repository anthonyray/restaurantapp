/*global restaurant, Backbone*/

restaurant.Collections = restaurant.Collections || {};

(function () {
    'use strict';

    restaurant.Collections.TablesCollection = Backbone.Collection.extend({

        model: restaurant.Models.TablesModel

    });

})();
