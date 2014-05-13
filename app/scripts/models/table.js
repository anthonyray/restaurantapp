/*global restaurant, Backbone*/

restaurant.Models = restaurant.Models || {};

(function () {
    'use strict';

    restaurant.Models.TableModel = Backbone.Model.extend({

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
