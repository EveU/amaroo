var _ = require('lodash');
var sampleData = require('./../sample');


var displayFlights = function(object){
  var flightsUl = document.getElementById("allFlights");
  flightsUl.innerHTML = "";

  for(flight of object){
    flight.date = flight.departing.substring(0,10);
    flight.time = flight.departing.substring(12,20); 
    flight.arriveDate = flight.arriving.substring(0,10);
    flight.arriveTime = flight.arriving.substring(12,20);

    var flightsDisplay = document.createElement("li");
    flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.date + ",  " + flight.time + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriveDate + ", " + flight.arriveTime + "<br><br>Price: £" + flight.price + "<br><hr>";

    flightsUl.appendChild(flightsDisplay);
  }
};

var displayHotels = function(object){
  var hotelsUl = document.getElementById("allHotels");
  hotelsUl.innerHTML = "";

  for(hotel of object){

    var hotelsDisplay = document.createElement("li");
    hotelsDisplay.innerHTML = "<b>" + hotel.name + " – " + hotel.address.city + "</b><br>Price Per Person: £" + hotel.pricePerPerson + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars <hr>";

    hotelsUl.appendChild(hotelsDisplay);
  }
};

// var orderFlightsByPrice = function(){
//   this.flights = _.orderBy(this.flights, ['price'], ['asc']);
// };

// var orderHotelsByPrice = function(){
//   this.hotels = _.orderBy(this.hotels, ['pricePerPerson'], ['asc']);
// }

module.exports = {displayFlights: displayFlights, displayHotels: displayHotels}