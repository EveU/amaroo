var sampleData = require('./sample');
var BookingOptions = require('./booking/BookingOptions');
var displayFlights = require('./views/defaultView').displayFlights;
var displayHotels = require('./views/defaultView').displayHotels;


window.onload = function(){
  console.log('loaded app');

  displayFlights(sampleData.flights);
  displayHotels(sampleData.hotels);

  var button = document.getElementById('searchButton');

  button.onclick = function(){
    var booking = new BookingOptions();

    var leaveFromInput = document.getElementById('leavingFrom');
    var goingToInput = document.getElementById('goingTo');
    var departureDate = document.getElementById('departureDate');

    // console.log(leaveFromInput.value);
    // console.log(goingToInput.value);
    // console.log(departureDate.value);

    var year = departureDate.value.substring(0,4);
    var month = departureDate.value.substring(5,7);
    var day = departureDate.value.substring(8,10);
    var correctedDate = day + "-" + month + "-" + year;

    var searchInputReturns = {
      homeCity: leavingFromInput.value,
      destinationCity: goingToInput.value,
      outboundDate: correctedDate
    }
    
    // console.log(searchInputReturns);

    var matchedFlights = booking.matchingFlights(searchInputReturns.outboundDate);
    booking.displayFlights(booking.flights);

    var matchedHotels = booking.matchingHotels(searchInputReturns.destinationCity);
    booking.displayHotels(booking.hotels);

  }

};
