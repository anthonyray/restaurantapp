/*global restaurant, Backbone*/

restaurant.Collections = restaurant.Collections || {};

(function () {
    'use strict';

    restaurant.Collections.DishesCollection = Backbone.Collection.extend({

        model: restaurant.Models.DishModel, 

        initialize : function(){
        	
        	this.add(
        		[
                new this.model({id:"ST01",title : "Oeufs Mimosa",price : 9,description:"",category : "starters"}),
        		new this.model({id : "ST02", title : "Gratinée French Onion Soup",price : 10,description: "Served in a crock with melted cheese",category : "starters"}), 
        		new this.model({id : "ST03", title : "House Salad", price : 10,description:"Fresh mixed greens, diced tomatoes marinated in olive oil, basil, garlic and topped with French dressing",category : "starters"}),
                new this.model({id:"MD01",title : "Starter 20",price : 6,category : "maindish"}),
                new this.model({id : "MD02", title : "Vegetarian Plate of the Day",price : 18,category : "maindish"}), 
                new this.model({id : "MD03", title : "Sautéed Mushrooms Romance", price : 22,description:"Garlic, white wine parsley and a touch of cream",category : "maindish"}),
                new this.model({id:"DS01",title : "Starter 20",price : 6,category : "desert"}),
                new this.model({id : "DS02", title : "Starter 21",price : 7,category : "desert"}), 
                new this.model({id : "DS03", title : "Starter 22", price : 10,category : "desert"}),

        		]);

        }

    });

})();
