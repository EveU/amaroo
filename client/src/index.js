var sampleData = require('./sample');

var displayFlights = function(){
  for(flight of sampleData.flights){
    var flightsDiv = document.getElementById("allFlights");

    var flightsDisplay = document.createElement("p")
    flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.departing + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriving + "<br><br>Price: £" + flight.price + "<br><br><hr>";

    flightsDiv.appendChild(flightsDisplay);
  }
};

var displayHotels = function(){
  for(hotel of sampleData.hotels){
    var hotelsDiv = document.getElementById("allHotels");

    var hotelsDisplay = document.createElement("p");
    hotelsDisplay.innerHTML = "<b>" + hotel.name + "</b><br>Price Per Person: " + hotel.pricePerPerson + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars <hr>";

    hotelsDiv.appendChild(hotelsDisplay);
  }
};

window.onload = function(){
  console.log('loaded app');
  console.log('sampleData', sampleData.hotels);

  displayFlights();
  displayHotels();

};

// Number(flight.price).toFixed(2)