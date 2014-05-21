/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.InformationView = Backbone.View.extend({

        template: JST['app/scripts/templates/information.hbs'],
        className : "page container",
        initialize : function(){
        	this.render();
        },

        render : function(){
        	this.$el.html(this.template());
        	return this;
        },

        transitionIn: function (callback) { // Refer to the documentation of the LandingView

            var view = this;

            var animateIn = function () {
              view.$el.addClass('is-visible');
              view.$el.one('transitionend', function () {
                if (_.isFunction(callback)) {
                  callback();
                }
              });
            };

            _.delay(animateIn, 20);

          },

          transitionOut: function (callback) { // Refer to the documentation of the LandingView

            var view = this;

            view.$el.removeClass('is-visible');
            view.$el.one('transitionend', function () {
              if (_.isFunction(callback)) {
                callback();
              }
            });

          }

    });

})();
