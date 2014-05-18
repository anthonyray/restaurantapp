/*global restaurant, Backbone*/

restaurant.Collections = restaurant.Collections || {};

(function () {
    'use strict';

    restaurant.Collections.DishesCollection = Backbone.Collection.extend({

        model: restaurant.Models.DishModel, 

        initialize : function(){
        	
        	this.add(
        		[
                new this.model({id:"ST01",title : "Starter 20",price : 6,category : "starters"}),
        		new this.model({id : "ST02", title : "Starter 21",price : 7,category : "starters"}), 
        		new this.model({id : "ST03", title : "Starter 22", price : 10,category : "starters"}),
                new this.model({id:"MD01",title : "Starter 20",price : 6,category : "maindish"}),
                new this.model({id : "MD02", title : "Starter 21",price : 7,category : "maindish"}), 
                new this.model({id : "MD03", title : "Starter 22", price : 10,category : "maindish"}),
                new this.model({id:"DS01",title : "Starter 20",price : 6,category : "desert"}),
                new this.model({id : "DS02", title : "Starter 21",price : 7,category : "desert"}), 
                new this.model({id : "DS03", title : "Starter 22", price : 10,category : "desert"}),

        		]);

        }

    });

})();
