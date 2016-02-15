var sampleData = require('./sample');
var BookingOptions = require('./booking/BookingOptions');

window.onload = function(){
  console.log('loaded app');
  var booking = new BookingOptions();

  booking.populateFlights(sampleData);
  booking.populateHotels(sampleData);

  var date = "28-03-2016";
  
  var matchingFlights = booking.matchingFlights(date);
  var matchingHotels = booking.matchingHotels("Canberra");


  // booking.displayFlights(booking.flights);
  // booking.displayHotels(booking.hotels);

  booking.displayFlights(matchingFlights);
  booking.displayHotels(matchingHotels);

};

// Number(flight.price).toFixed(2)