var _ = require('lodash');

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

  orderFlightsByPrice: function(){
    this.flights = _.orderBy(this.flights, ['price'], ['asc']);
  },

  orderHotelsByPrice: function(){
    this.hotels = _.orderBy(this.hotels, ['pricePerPerson'], ['asc']);
  },

  matchingFlights: function(date){
    var matchingFlights = _.filter(this.flights, ['departing', date]);
    return matchingFlights;
  },

  matchingHotels: function(city){
    var matchingHotels = _.filter(this.hotels, ['address.city', city]);
    matchingHotels = _.orderBy(matchingHotels, ['pricePerPerson'], ['asc']);
    return matchingHotels;
  },

  displayFlights: function(object){
    for(flight of object){
      var flightsDiv = document.getElementById("allFlights");

      var flightsDisplay = document.createElement("p")
      flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.departing + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriving + "<br><br>Price: £" + flight.price + "<br><hr>";

      flightsDiv.appendChild(flightsDisplay);
    }
  },

  displayHotels: function(object){
    for(hotel of object){
      var hotelsDiv = document.getElementById("allHotels");

      var hotelsDisplay = document.createElement("p");
      hotelsDisplay.innerHTML = "<b>" + hotel.name + "</b><br>Price Per Person: £" + hotel.pricePerPerson + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars <hr>";

      hotelsDiv.appendChild(hotelsDisplay);
    }
  }
};

module.exports = BookingOptions;