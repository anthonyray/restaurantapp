/*global restaurant, Backbone*/

restaurant.Models = restaurant.Models || {};

(function () {
    'use strict';

    restaurant.Models.DishModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
