/*global restaurant, $*/


window.restaurant = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.router = new this.Routers.AppRouter($('#appview'));
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    restaurant.init();
});
