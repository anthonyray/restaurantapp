/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.MenuView = Backbone.View.extend({

        template: JST['app/scripts/templates/menu.hbs'], 
        className : "page container",
        initialize : function(){
            // Filter collection into categories
            this.startersCollection = this.collection.filter(function(dish) {
                return dish.get("category") == "starters";
            });

            this.mainDishCollection = this.collection.filter(function(dish) {
                return dish.get("category") == "maindish";
            });

            this.desertCollection = this.collection.filter(function(dish) {
                return dish.get("category") == "desert";
            });

            // Starters subviews :

            this.render();
        }, 

        render : function(options){
        	var self = this;
            options = options || {};

            if (options.page === true){
                this.$el.addClass('page');
            }
            
            this.$el.html(this.template());
        	
            this.startersSection = this.$("#starters");
            this.mainDishSection = this.$("#maindish");
            this.desertSection = this.$("#desert");
            // Render starters
            this.startersCollection.forEach(function(model){
                self.addOne(model,self.startersSection);
            });
            // Render main dishes
            this.mainDishCollection.forEach(function(model){
                self.addOne(model,self.mainDishSection);
            });
            // Render deserts
            this.desertCollection.forEach(function(model){
                self.addOne(model,self.desertSection);
            });

            return this;
        }, 
        
        addOne: function (dish,section) {
                var view = new restaurant.Views.MenuDishthumbView({ model: dish });
                section.append( view.render().el );
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
