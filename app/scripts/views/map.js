/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.MapView = Backbone.View.extend({

        template: JST['app/scripts/templates/map.hbs']

    });

})();
