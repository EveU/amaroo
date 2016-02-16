var _ = require('lodash');
var sampleData = require('./../sample');

var SearchResults = function(){
  this.searchType = "";
  this.flights = [];
  this.hotels = [];
}

SearchResults.prototype = {

  addFlight: function(flight){
    this.flights.push(flight);
  },

  addHotel: function(hotel){
    this.hotels.push(hotel);
  },

  matchingFlights: function(date){
    this.flights = [];
    for(flight of sampleData.flights){
      if(flight.departing.substring(0,10) === date){
        this.addFlight(flight);
      }
    }
    return this.flights;
  },

  matchingHotels: function(city){
    this.hotels = [];
    for(hotel of sampleData.hotels){
      if(hotel.address.city === city){
        this.addHotel(hotel);
      }
    }
  }
};

module.exports = SearchResults;