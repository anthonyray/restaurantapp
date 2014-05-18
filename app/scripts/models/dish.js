/*global restaurant, Backbone*/

restaurant.Models = restaurant.Models || {};

(function () {
    'use strict';

    restaurant.Models.DishModel = Backbone.Model.extend({

        initialize: function() {
        },

        defaults: {
            id : "",
            title : "",
            description : "",
            price : "", 
            currency : "$",
            category:"starters"
        }
    });

})();
