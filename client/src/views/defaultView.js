var _ = require('lodash');
var sampleData = require('./../sample');
var SearchResults = require("./../models/SearchResults");

var Hotel = require('../models/hotel');

var displayFlights = function(object){
  var flightsUl = document.getElementById("allFlights");
  flightsUl.innerHTML = "";

  if(object.length > 0){
    for(flight of object){
      flight.date = flight.departing.substring(0,10);
      flight.time = flight.departing.substring(12,20); 
      flight.arriveDate = flight.arriving.substring(0,10);
      flight.arriveTime = flight.arriving.substring(12,20);

      var flightsDisplay = document.createElement("li");

      flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.date + ",  " + flight.time + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriveDate + ", " + flight.arriveTime + "<br><br>Price: £" + flight.price + "<br>";

      flightsUl.appendChild(flightsDisplay);
    }
  }
  else {
    flightsUl.innerHTML = "No matching flights.";
    }
  };

  var displayHotels = function(object){
    var hotelsUl = document.getElementById("allHotels");
    hotelsUl.innerHTML = "";

    for(hotel of object){

      var hotelsDisplay = document.createElement("li");
      hotelsDisplay.innerHTML = "<b>" + hotel.name + " – " + hotel.address.city + "</b><br>Price for your stay: £" + hotel.totalCost + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars";

      hotelsUl.appendChild(hotelsDisplay);
    }
    // <br><small>Price based on one person staying for " + lengthOfStay + " nights.
  };

// var orderFlightsByPrice = function(){
//   this.flights = _.orderBy(this.flights, ['price'], ['asc']);
// };

// var orderHotelsByPrice = function(){
//   this.hotels = _.orderBy(this.hotels, ['pricePerPerson'], ['asc']);
// }

module.exports = {displayFlights: displayFlights, displayHotels: displayHotels}