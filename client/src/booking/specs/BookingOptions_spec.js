var assert = require('assert');
var BookingOptions = require('./../BookingOptions');
var sampleData = require('./sample');

describe('Booking (flights)', function(){
  it('should have an array of flights that is empty at first', function(){
    var booking = new BookingOptions();

    assert.equal(0, booking.flights.length);
  });

  it('should have a list of flights populated from the JSON', function(){
    var booking = new BookingOptions();
    var flights = sampleData.flights;

    for(flight of flights){
      booking.addFlight(flight);
    }

    assert.equal(6, booking.flights.length);
  });

  it('should be able to be sort fights by price', function(){
    var booking = new BookingOptions();
    var flights = sampleData.flights;

    for(flight of flights){
      booking.addFlight(flight);
    }

    booking.orderFlightsByPrice();

    assert.equal("Canberra", booking.flights[0].arrival);
    assert.equal(212, booking.flights[0].price);
  });

  it('should be able to return a list of flights on specified date', function(){
    var booking = new BookingOptions();
    var flights = sampleData.flights;

    for(flight of flights){
      booking.addFlight(flight);
    }

    booking.matchingFlights('27-03-2016 T10:00:00');

    assert.equal(293, booking.flightsOnDate[0].price);
  });
});

describe('Booking (hotel)', function(){
  it('should have an array of hotels that is empty at first', function(){
    var booking = new BookingOptions();

    assert.equal(0, booking.hotels.length);
  });

  it('should have a list of hotels populated from the JSON', function(){
    var booking = new BookingOptions();
    var hotels = sampleData.hotels;

    for(hotel of hotels){
      booking.addHotel(hotel);
    }

    assert.equal(9, booking.hotels.length);
  });

  it('should be able to sort hotels by price', function(){
    var booking = new BookingOptions();
    var hotels = sampleData.hotels;

    for(hotel of hotels){
      booking.addHotel(hotel);
    }

    booking.orderHotelsByPrice();

    assert.equal(12, booking.hotels[0].pricePerPerson);
  });

  it('should be able to return a list of hotels in matching city', function(){
    var booking = new BookingOptions();
    var hotels = sampleData.hotels;
    var city = "Melbourne";

    for(hotel of hotels){
      booking.addHotel(hotel);
    }

    booking.matchingHotels(city);

    assert.equal(3, booking.hotelsInCity.length);

  });
});

// describe('Search', function(){
//   it('should be able to take a departure date', function(){
//     var departureDate = document.getElementById("search");
//     assert.equal('15 Feb, 2016', departureDate.value);
//   });
// });