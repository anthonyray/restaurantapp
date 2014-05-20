/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {};

(function () {
    'use strict';

    restaurant.Views.MenuView = Backbone.View.extend({

        template: JST['app/scripts/templates/menu.hbs'], 
        className : "container",
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

        render : function(){
        	var self = this;
            
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
        }

    });

})();
