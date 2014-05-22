/*global restaurant, Backbone*/

restaurant.Collections = restaurant.Collections || {};

(function () {
    'use strict';

    restaurant.Collections.DishesCollection = Backbone.Collection.extend({

        model: restaurant.Models.DishModel,

        initialize : function(){

        	this.add( // Here comes the hardcoded values.
        		[
                new this.model({id:"ST01",title : "Oeufs Mimosa",price : 9,description:"Hard boiled egg, served with a delicate home made mayonnaise, accompanied by light hints of basil",category : "starters"}),
        		new this.model({id : "ST02", title : "Gratinée French Onion Soup",price : 10,description: "Served with melted cheese and parsley",category : "starters"}),
        		new this.model({id : "ST03", title : "House Salad", price : 10,description:"Fresh mixed greens, diced tomatoes marinated in olive oil, basil, garlic and topped with French dressing",category : "starters"}),
                new this.model({id:"MD01",title : "Parisian Omelette",price : 6,description:"French Omelette accompanied with rice and beans",category : "maindish"}),
                new this.model({id : "MD02", title : "Vegetarian Plate of the Day",price : 18,description:"Selection of fresh vegetables from our kitchen garden",category : "maindish"}),
                new this.model({id : "MD03", title : "Sautéed Mushrooms Romance", price : 22,description:"Garlic, white wine parsley and a touch of cream",category : "maindish"}),
                new this.model({id:"DS01",title : "Sweet asparagus crêpe",price : 6,description : "Baby asparagus served in a chocolate crepe", category : "desert"}),
                new this.model({id : "DS02", title : "Raspberry muesli from the garden",price : 7,description : "Home made rapsberry yoghurt accompanied with cereals", category : "desert"}),
                new this.model({id : "DS03", title : "French vanilla ice cream",description : "Home made ice cream", price : 10,category : "desert"}),

        		]);

        }

    });

})();
