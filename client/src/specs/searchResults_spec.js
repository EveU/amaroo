var assert = require('assert');
var SearchResults = require('./../models/SearchResults');
var sampleData = require('./sample.json');

describe('Search results (flights)', function(){
  it('should have an array of flights that is empty at first', function(){
    var currentSearch = new SearchResults();

    assert.equal(0, currentSearch.flights.length);
  });

  it('should be able to add flights to the array', function(){
    var currentSearch = new SearchResults();

    for(flight of sampleData.flights){
      currentSearch.addFlight(flight);
    }

    assert.equal(6, currentSearch.flights.length);
  });

  // it('should be able to be sort fights by price', function(){
  //   var booking = new BookingOptions();
  //   var flights = sampleData.flights;

  //   for(flight of flights){
  //     booking.addFlight(flight);
  //   }

  //   booking.orderFlightsByPrice();

  //   assert.equal("Canberra", booking.flights[0].arrival);
  //   assert.equal(212, booking.flights[0].price);
  // });

  it('should be able to return a list of flights on specified date', function(){
    var currentSearch = new SearchResults();

    for(flight of sampleData.flights){
      currentSearch.addFlight(flight);
    }

    currentSearch.matchingFlights('28-03-2016');

    assert.equal(293, currentSearch.flights[0].price);
  });
});

describe('Search results (hotel)', function(){
  it('should have an array of hotels that is empty at first', function(){
    var currentSearch = new SearchResults();

    assert.equal(0, currentSearch.hotels.length);
  });

  it('should be able to add flights to the array', function(){
    var currentSearch = new SearchResults();

    for(hotel of sampleData.hotels){
      currentSearch.addHotel(hotel);
    }

    assert.equal(9, currentSearch.hotels.length);
  });

  // it('should be able to sort hotels by price', function(){
  //   var booking = new BookingOptions();
  //   var hotels = sampleData.hotels;

  //   for(hotel of hotels){
  //     booking.addHotel(hotel);
  //   }

  //   booking.orderHotelsByPrice();

  //   assert.equal(12, booking.hotels[0].pricePerPerson);
  // });

  it('should be able to return a list of hotels in matching city', function(){
    var currentSearch = new SearchResults();
    var city = "Melbourne";

    currentSearch.matchingHotels(city);

    assert.equal(3, currentSearch.hotels.length);

  });
});

// describe('Search', function(){
//   it('should be able to take a departure date', function(){
//     var departureDate = document.getElementById("search");
//     assert.equal('15 Feb, 2016', departureDate.value);
//   });
// });