var sampleData = require('./sample');
var BookingOptions = require('./booking/BookingOptions');

window.onload = function(){
  console.log('loaded app');
  console.log('sampleData', sampleData.hotels);
  var booking = new BookingOptions();

  for(flight of sampleData.flights){
    booking.addFlight(flight);
  }
  for(hotel of sampleData.hotels){
    booking.addHotel(hotel);
  }

  booking.matchingFlights('28-03-2016 T10:00:00');
  booking.matchingHotels("Canberra");


  booking.displayFlights(booking.flights);
  booking.displayHotels(booking.hotels);
  
  // booking.displayFlights(booking.flightsOnDate);
  // booking.displayHotels(booking.hotelsInCity);

};

// Number(flight.price).toFixed(2)