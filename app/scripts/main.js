/*global restaurant, $*/


window.restaurant = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new this.Views.BookingView({el : '#yolo'});
    }
};

$(document).ready(function () {
    'use strict';
    restaurant.init();
});
