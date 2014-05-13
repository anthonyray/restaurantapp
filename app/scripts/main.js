/*global restaurant, $*/


window.restaurant = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        
        this.bookingView = new this.Views.BookingView({el : '#yolo', model : new this.Models.BookingModel()} );

    }
};

$(document).ready(function () {
    'use strict';
    restaurant.init();
});
