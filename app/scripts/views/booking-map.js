/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.BookingMapView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking-map.hbs']

    });

})();
