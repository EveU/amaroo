var sampleData = require('./sample');
var BookingOptions = require('./booking/BookingOptions');

window.onload = function(){
  console.log('loaded app');
  var booking = new BookingOptions();

  // booking.displayFlights(sampleData.flights);
  // booking.displayHotels(sampleData.hotels);

  // booking.populateFlights(sampleData);
  // booking.populateHotels(sampleData);

  // var date = "28-03-2016";
  
  // var matchingFlights = booking.matchingFlights(date);
  // var matchingHotels = booking.matchingHotels("Canberra");

  // booking.displayFlights(booking.flights);
  booking.displayHotels(booking.hotels);

  // booking.displayFlights(matchingFlights);
  // booking.displayHotels(matchingHotels);

  var button = document.getElementById('searchButton');

  button.onclick = function(){
    console.log("I was clicked and I liked it");
    var leaveFromInput = document.getElementById('leavingFrom');
    var goingToInput = document.getElementById('goingTo');
    var departureDate = document.getElementById('departureDate');
    var returnDate = document.getElementById('returnDate');

    // console.log(leaveFromInput.value);
    // console.log(goingToInput.value);
    // console.log(departureDate.value);

    var correctDate = function(date){
    var year = date.substring(0,4);
    var month = date.substring(5,7);
    var day = date.substring(8,10);
    var correctedDate = day + "-" + month + "-" + year;
    return correctedDate;
    }

    var searchInputReturns = {
      homeCity: leavingFrom.value,
      destinationCity: goingToInput.value,
      outboundDate: correctDate(departureDate.value),
      inboundDate: correctDate(returnDate.value)
    }
    
    console.log(searchInputReturns);

    var matchedFlights = booking.matchingFlights(searchInputReturns.outboundDate, searchInputReturns.destinationCity);
    booking.displayFlights(booking.flights);

    var matchedHotels = booking.matchingHotels(searchInputReturns.destinationCity);
    booking.displayHotels(booking.hotels);

  }

};
