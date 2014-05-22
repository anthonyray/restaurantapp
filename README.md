# Restaurant App

## Description
Restaurant App is a single page website built with Backbone.JS.
I was asked to do this project with one constraint : "Make a website hosted on a server that serves static content, but make the website dynamic and interesting".

I wanted to bring dynamism to the website by making a single page website, with page transitions. I built the website respecting the initial constraint but writing code so that adding a regular server with a database could be done only adding two to three lines of code on the client side.

## Quick start
You can find a hosted version of the project [here](http://www.google.com).

If you want to make a local copy just run `git clone https://github.com/anthonyray/restaurantapp.git`

+ If you have Grunt, you can run : `grunt serve` inside the `restaurantapp`directory
+ Else, you can run a static server in the `restaurantapp/dist` folder (you can run `python -m SimpleHTTPServer` for instance)

## Further documentation
### Frameworks and libraries used
We might argue over the utility of Backbone.JS here but I think that it brought solid structure to my code base. I tried to keep the use of library minimal.

+ [Backbone.JS](http://backbonejs.org/)
+ [JQuery](http://jquery.com/)
+ [Underscore.js](http://underscorejs.org/) (Backbone dependency)
+ [Handlebars](https://github.com/wycats/handlebars.js/) : used for the templating system
+ [Bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker) : used for the calendar

### Tools used
I used yeoman with the official backbone generator to scaffold the website.
I use the following CLI tools :
+ `yeoman`
+ `bower`
+ `grunt`

### Structure of the code (and how to read it)
Backbone.JS brought a MV\* structuration to the application. Here is the list of the views (which are like Controllers), Models, Collection, and Router :

+ **Views**
  + `landing.js` : **LandingView**. View that displays the landing page
  + `menu.js` : **MenuView**. View that displays the menu of the restaurant
    + `dish-thumb.js` : subview that displays thumbnail for a dish on the menu page.
  + `dish.js` : **DishView**. View that displays more information on a particular dish.
  + `information.js` : **InformationView**. View that displays (fake) information about the restaurant.
  + `booking.js` : **BookingView**. View that displays a form to make a reservation
    + `booking_datepicker.js` : **BookingConfirmView**. Subview that display a calendar to pick a date for a reservation
    + `booking_map.js` : **BookingMapView**. Subview that displays a map of the restaurant and allows the client to choose his table.
    + `booking_confirm.js` : **BookingConfirmView**. Subview that displays a summary of the client's reservation.

+ **Models**
  + `booking.js` : **BookingModel** . Representation of a client reservation.
  + `dish.js` : **DishModel**. Representation of a dish.
+ **Collection**
   + `dishes.js` : **DishesCollection**. Collection of dishes (This is where I hardcoded the data, which is supposed to be retrieve from the backend server)
+ **Router**
  + `app.js` : **AppRouter**. Router that initializes views, and handles the transition between them.
+ **Templates**  : Every views has its own handlebars templates. I also added some templates helpers.
