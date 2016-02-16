var _ = require('lodash');
var sampleData = require('./../sample');

var SearchResults = function(){
  // this.searchType = "";
  this.userInput = {};
  this.flights = [];
  this.hotels = [];
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

  matchingFlights: function(date){
    if(!date) date = this.userInput.departDate;
    this.flights = [];
    for(flight of sampleData.flights){
      if(flight.departing.substring(0,10) === date){
        this.addFlight(flight);
      }
    }
    return this.flights;
  },

  matchingHotels: function(city){
    if(!city) city = this.userInput.tripDestination;
    this.hotels = [];
    for(hotel of sampleData.hotels){
      if(hotel.address.city === city){
        this.addHotel(hotel);
      }
    }
  }
};

module.exports = SearchResults;