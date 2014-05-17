/*global restaurant, Backbone*/

restaurant.Models = restaurant.Models || {};

(function () {
    'use strict';

    restaurant.Models.BookingModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            bookingDate : null,
            tableNumber : 0
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
