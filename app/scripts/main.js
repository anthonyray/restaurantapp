/*global restaurant, $*/


window.restaurant = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.router = new this.Routers.AppRouter($('#appview')); // Initialize the router by giving it the DOM element where pages will be put
        Backbone.history.start(); // Starting the history
    }
};

$(document).ready(function () {
    'use strict';
    restaurant.init();
});
