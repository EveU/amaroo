var _ = require('lodash');
var sampleData = require('./../sample');

var BookingOptions = function(){
  this.bookingType = "";
  this.flights = [];
  this.hotels = [];
}

BookingOptions.prototype = {

  addFlight: function(flight){
    this.flights.push(flight);
  },

  addHotel: function(hotel){
    this.hotels.push(hotel);
  },

  // populateFlights: function(sampleData){
  //   for(flight of sampleData.flights){
  //     flight.date = flight.departing.substring(0,10);
  //     flight.time = flight.departing.substring(12,20);
  //     this.addFlight(flight);
  //   }
  // },

  // populateHotels: function(sampleData){
  //   for(hotel of sampleData.hotels){
  //     this.addHotel(hotel);
  //   }
  // },

  orderFlightsByPrice: function(){
    this.flights = _.orderBy(this.flights, ['price'], ['asc']);
  },

  orderHotelsByPrice: function(){
    this.hotels = _.orderBy(this.hotels, ['pricePerPerson'], ['asc']);
  },

  // matchingFlights: function(date){
  //   var matchingFlights = _.filter(this.flights, ['date', date]);
  //   return matchingFlights;
  // },

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
  },

  // matchingHotels: function(city){
  //   var matchingHotels = _.filter(this.hotels, ['address.city', city]);
  //   matchingHotels = _.orderBy(matchingHotels, ['pricePerPerson'], ['asc']);
  //   return matchingHotels;
  // },

  displayFlights: function(object){
    var flightsUl = document.getElementById("allFlights");
    flightsUl.innerHTML = "";

    for(flight of object){

      var flightsDisplay = document.createElement("li");
      flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.departing + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriving + "<br><br>Price: £" + flight.price + "<br><hr>";

      flightsUl.appendChild(flightsDisplay);
    }
  },

  displayHotels: function(object){
    var hotelsUl = document.getElementById("allHotels");
    hotelsUl.innerHTML = "";

    for(hotel of object){

      var hotelsDisplay = document.createElement("li");
      hotelsDisplay.innerHTML = "<b>" + hotel.name + "</b><br>Price Per Person: £" + hotel.pricePerPerson + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars <hr>";

      hotelsUl.appendChild(hotelsDisplay);
    }
  }
};

module.exports = BookingOptions;