var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');
var Hotel = require('./hotel');
var Flight = require('./flight');
var Package = require('./package');


var SearchResults = function(){
  // this.searchType = "";
  this.userInput = {};
  this.flights = [];
  this.hotels = [];
  this.packages = [];
}

SearchResults.prototype = {

  updateUserInput: function(userInput){ 
    this.userInput = {
      tripOrigin: userInput.tripOrigin,
      tripDestination: userInput.tripDestination,
      departDate: userInput.departDate,
      returnDate: userInput.returnDate
    }
  },

  addFlight: function(flight){
    this.flights.push(flight);
  },

  addHotel: function(hotel){
    this.hotels.push(hotel);
  },

  matchingFlights: function(){
    this.flights = [];
    for(flight of sampleData.flights){
      if((flight.departing.substring(0,10) === this.userInput.departDate) && (flight.arrival === this.userInput.tripDestination)){
        this.addFlight(new Flight(flight));
      }
    }
    this.orderFlightsByPrice();
  },

  matchingHotels: function(){
    this.hotels = [];
    for(hotel of sampleData.hotels){
      if(hotel.address.city === this.userInput.tripDestination){
        newHotel = new Hotel(hotel);
        newHotel.calculateStay(this.userInput);
        newHotel.calculatePrice();
        this.addHotel(newHotel);
      }
    }
    this.orderHotelsByPrice();
  },

  matchingPackages: function(){
    this.packages = [];
    for(flight of this.flights){
      for(hotel of this.hotels){
        var package = new Package(flight, hotel);
        this.packages.push(package);
      }
    }
    this.orderPackagesByPrice();
  },

  orderFlightsByPrice: function(){
    this.flights = _.orderBy(this.flights, ['price'], ['asc']);
  },

  orderHotelsByPrice: function(){
    this.hotels = _.orderBy(this.hotels, ['totalCost'], ['asc']);
  },

  orderPackagesByPrice: function(){
    this.packages = _.orderBy(this.packages, ['price'], ['asc']);
  }
};

module.exports = SearchResults;