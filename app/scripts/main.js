/*global restaurant, $*/


window.restaurant = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        
        var router = new this.Routers.AppRouter($('#appview'));
        Backbone.history.start();
        //this.bookingView = new this.Views.BookingView({el : '#appview', model : new this.Models.BookingModel()} );

    }
};

$(document).ready(function () {
    'use strict';
    restaurant.init();
});
