var assert = require('assert');
var Flights = require('./../flights');
var sampleData = require('./sample');

describe('Flights', function(){
  it('should be empty at first', function(){
    var flights = new Flights();
    assert.equal(0, flights.trips.length);
  });
  it('should have a list of trips populated from the JSON', function(){
    var flights = new Flights();
    var trips = sampleData.flights;

    for(flight of trips){
      flights.addTrip(flight);
    }
    assert.equal(6, flights.trips.length);
  });
  it('should be able to be sorted by price', function(){
    var flights = new Flights();
    var trips = sampleData.flights;

    for(flight of trips){
      flights.addTrip(flight);
    }
    flights.orderByPrice();
    assert.equal("Canberra", flights.trips[0].arrival);
    assert.equal(212, flights.trips[0].price);
  });
});

// describe('Search', function(){
//   it('should be able to take a departure date', function(){
//     var departureDate = document.getElementById("search");
//     assert.equal('15 Feb, 2016', departureDate.value);
//   });
// });