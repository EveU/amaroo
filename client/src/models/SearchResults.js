var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');

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

  matchingFlights: function(){
    this.flights = [];
    for(flight of sampleData.flights){
      if((flight.departing.substring(0,10) === this.userInput.departDate) && (flight.arrival === this.userInput.tripDestination)){
        this.addFlight(flight);
      }
    }
    return this.flights;
  },

  matchingHotels: function(){
    this.hotels = [];
    for(hotel of sampleData.hotels){
      if(hotel.address.city === this.userInput.tripDestination){
        this.addHotel(hotel);
      }
    }
  },

  lengthOfStay: function(){
    var checkIn = moment(this.userInput.departDate, "DD MM YYYY");
    var checkOut = moment(this.userInput.returnDate, "DD MM YYYY");
    var lengthOfStay = checkOut.diff(checkIn, "days");
    return lengthOfStay;
  }
};

module.exports = SearchResults;