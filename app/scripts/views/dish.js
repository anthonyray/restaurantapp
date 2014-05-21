/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.DishView = Backbone.View.extend({

        template: JST['app/scripts/templates/dish.hbs'], 
        className : "page container",
        initialize : function(){
        	this.render();
        }, 

        render : function(){
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }, 

        transitionIn: function (callback) {

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

          transitionOut: function (callback) {

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
