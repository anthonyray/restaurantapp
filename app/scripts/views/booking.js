/*global restaurant, Backbone, JST*/

restaurant.Views = restaurant.Views || {}; 

(function () {
    'use strict';

    restaurant.Views.BookingView = Backbone.View.extend({

        template: JST['app/scripts/templates/booking.hbs'], 
        
        className : "page container",
        
        render : function(){
            this.destroyViews(); // Deleting the subviews to avoid memory leaks
            var self = this;
            
            this.$el.html(this.template());

            _.delay(function(){
                self.subviews = [ // Hardcoding all the subviews. Every subview has the BookingModel as a property
                    new restaurant.Views.BookingDatetitleView({el : "#booking-datetitle", model : self.model}),
                    new restaurant.Views.BookingDatepickerView({el : "#booking-datepicker", model : self.model}),
                    new restaurant.Views.BookingConfirmView({el : "#booking-confirm", model : self.model}),
                    new restaurant.Views.BookingMapView({el : "#booking-map", model : self.model})
                    ];
            	return self;},50);
        },

        initialize : function(){
        	var self = this;
        	
            this.subviews = []; // Placeholder for sub-views        
            
        },

        destroyViews : function(){
            _.invoke(this.views, 'destroy'); // Destroys subviews
            this.subviews.length = 0; // Quick way to empty a table. 
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
