Date.prototype.yyyymmdd = function() {  // Helper function to turn a Date object into a string formated like this : yyyy / mm / dd        
                                
        var yyyy = this.getFullYear().toString();                                    
        var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based         
        var dd  = this.getDate().toString();             
                            
        return yyyy + '/' + (mm[1]?mm:"0"+mm[0]) + '/' + (dd[1]?dd:"0"+dd[0]);
   };  

Handlebars.registerHelper('tableBooked', function(tableNumber) {
  if (tableNumber > 0){
  	return "success";
  }
  else
  {
  	return "";
  }
});

Handlebars.registerHelper('bookingComplete', function(tableNumber,bookingDate) {
  if (tableNumber > 0 && (bookingDate) ){
  	return "success";
  }
  else
  {
  	return "";
  }
});

Handlebars.registerHelper('bookingButton', function(tableNumber,bookingDate) {
  if (tableNumber > 0 && (bookingDate) ){
  	return "<a class='btn btn-primary'>Book now</a>";
  }
  else
  {
  	return "";
  }
});

Handlebars.registerHelper('tableNumber', function(tableNumber) {
  if (tableNumber > 0){
  	return "You picked the table : <b class='success'>"+tableNumber+"</b>";
  }
  else
  {
  	return "Please pick a seat."
  }
});

Handlebars.registerHelper('humanReadableDate', function(bookingDate) {
	return bookingDate.yyyymmdd();
});

