/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.LandingView = Backbone.View.extend({

        template: JST['app/scripts/templates/landing.hbs'],

        className : "page",

        initialize : function(){
        	this.render();
        },

        render : function(){
          this.$el.html(this.template());
        	return this;
        },

        transitionIn: function (callback) { // Transition in function

            var view = this;

            var animateIn = function () {
              view.$el.addClass('is-visible'); // When the view is rendered, it is appended to the DOM, but it is not visible. Adding the class ".is-visible" will trigger an animation

              view.$el.one('transitionend', function () { // Listen once to the 'transitionend' event, and call the callback upon completion of the transition of the view.
                if (_.isFunction(callback)) {
                  callback();
                }
              });
            };

            _.delay(animateIn, 50); // Delay the animation to make sure the DOM is ready.

          },

          transitionOut: function (callback) { // Transition out function

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
