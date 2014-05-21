/*global restaurant, Backbone*/

restaurant.Models = restaurant.Models || {};

(function () {
    'use strict';

    restaurant.Models.BookingModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            bookingDate : null, // Property to save the client's reservation date.
            tableNumber : 0 // Property to save the client's reserved table number.
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
