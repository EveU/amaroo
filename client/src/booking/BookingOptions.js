var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');

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

  matchingFlights: function(date, city){
    this.flights = [];
    for(flight of sampleData.flights){
      if((flight.departing.substring(0,10) === date) && (flight.arrival === city)){
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

    if(object.length > 0){
      for(flight of object){
        flight.date = flight.departing.substring(0,10);
        flight.time = flight.departing.substring(12,20); 
        flight.arriveDate = flight.arriving.substring(0,10);
        flight.arriveTime = flight.arriving.substring(12,20);

        var flightsDisplay = document.createElement("li");
        console.log(this.flights);
        console.log(this.flights.length);

        flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.date + ",  " + flight.time + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriveDate + ", " + flight.arriveTime + "<br><br>Price: £" + flight.price + "<br><hr>";

        flightsUl.appendChild(flightsDisplay);
      }
    }
    else {
      flightsUl.innerHTML = "No matching flights.";
      // Later create paragraph tag and append to that later (set to hidden etc if not used).
    }

  },

  displayHotels: function(object, lengthOfStay){
    var hotelsUl = document.getElementById("allHotels");
    hotelsUl.innerHTML = "";

    for(hotel of object){

      var hotelsDisplay = document.createElement("li");
      hotelsDisplay.innerHTML = "<b>" + hotel.name + " – " + hotel.address.city + "</b><br>Price for your stay: £" + this.priceOfStay(lengthOfStay, hotel.pricePerPerson) + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars <hr>";

      hotelsUl.appendChild(hotelsDisplay);
    }
    // <br><small>Price based on one person staying for " + lengthOfStay + " nights.

  },

  lengthOfStay: function(checkIn, checkOut){
    var checkIn = moment(checkIn, "DD MM YYYY");
    var checkOut = moment(checkOut, "DD MM YYYY");
    var lengthOfStay = checkOut.diff(checkIn, "days");
    return lengthOfStay;
  },

  priceOfStay: function(nights, price){
    var nights = nights;
    var price = price;
    return (nights * price);
  }
};

module.exports = BookingOptions;