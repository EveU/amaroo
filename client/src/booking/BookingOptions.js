var _ = require('lodash');

var BookingOptions = function(){
  this.bookingType = "";
  this.flights = [];
  this.flightsOnDate = [];

  this.hotels = [];
  this.hotelsInCity = [];
}

BookingOptions.prototype = {
  addFlight: function(flight){
    this.flights.push(flight);
  },
  addHotel: function(hotel){
    this.hotels.push(hotel);
  },
  orderFlightsByPrice: function(){
    this.flights = _.orderBy(this.flights, ['price'], ['asc']);
  },
  orderHotelsByPrice: function(){
    this.hotels = _.orderBy(this.hotels, ['pricePerPerson'], ['asc']);
  },
  matchingFlights: function(date){
    this.flightsOnDate = _.filter(this.flights, ['departing', date]);
  },
  matchingHotels: function(city){
    this.hotelsInCity = _.filter(this.hotels, ['address.city', city]);
    this.hotelsInCity = _.orderBy(this.hotelsInCity, ['pricePerPerson'], ['asc']);
  },
};

module.exports = BookingOptions;