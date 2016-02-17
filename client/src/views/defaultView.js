var _ = require('lodash');
var sampleData = require('./../sample');
var SearchResults = require("./../models/SearchResults");

var Hotel = require('../models/hotel');

var DefaultView = function(document){
  this.document = document;
  this.flightsDisplay = document.getElementById("flights");
  this.flightsUl = document.getElementById("allFlights");
  this.hotelsDisplay = document.getElementById("hotels");
  this.hotelsUl = document.getElementById("allHotels");
  this.packagesDisplay = document.getElementById("packages");
  this.packagesUl = document.getElementById("allPackages");
  this.packageDetailsDisplay = document.getElementById("packageDetails");
  this.packageHeader = document.getElementById("packageHeader");
  this.packageFlightLi = document.getElementById("packageFlight");
  this.packageHotelLi = document.getElementById("packageHotel");
}

DefaultView.prototype = {
  clearHotelDisplay: function(){
    this.hotelsDisplay.style.display = "none";
  },

  clearFlightDisplay: function(){
    this.flightsDisplay.style.display = "none";
  },

  clearPackagesDisplay: function(){
    this.packagesDisplay.style.display = "none";
  },

  clearPackageDetailsDisplay: function(){
    this.packageDetailsDisplay.style.display = "none";
  },

  clearAll: function(){
    this.clearHotelDisplay();
    this.clearFlightDisplay();
    this.clearPackagesDisplay();
    this.clearPackageDetailsDisplay();
  },

  displayFlights: function(flights){
    this.clearAll();
    this.flightsDisplay.style.display = "block";

    this.flightsUl.innerHTML = "";

    if(flights.length > 0){
      for(flight of flights){
        flight.date = flight.departing.substring(0,10);
        flight.time = flight.departing.substring(12,20); 
        flight.arriveDate = flight.arriving.substring(0,10);
        flight.arriveTime = flight.arriving.substring(12,20);

        var flightsDisplay = document.createElement("li");

        flightsDisplay.innerHTML = "Departure: " + flight.departure + "<br>Departure Time: " + flight.date + ",  " + flight.time + "<br><br> Arrival: " + flight.arrival + "<br>Arrival Time: " + flight.arriveDate + ", " + flight.arriveTime + "<br><br>Price: £" + flight.price + "<br>";

        this.flightsUl.appendChild(flightsDisplay);
      }
    }
    else {
      this.flightsUl.innerHTML = "No matching flights.";
    }
  },

  displayHotels: function(hotels){
    // this.clearPackageDisplay();
    this.hotelsDisplay.style.display = "block";
    this.hotelsUl.innerHTML = "";

    for(hotel of hotels){

      var hotelsDisplay = document.createElement("li");
      hotelsDisplay.innerHTML = "<b>" + hotel.name + " – " + hotel.address.city + "</b><br>Price per person: £" + hotel.pricePerPerson + "<br>Number of Rooms: " + hotel.rooms + "<br>Rating: " + hotel.stars + " Stars";

      this.hotelsUl.appendChild(hotelsDisplay);
    }

  },

  displayPackages: function(packages){
    this.clearFlightDisplay();
    this.clearHotelDisplay();
    this.packagesDisplay.style.display = "block";

    var packagesUl = document.getElementById("allPackages");
    this.packagesUl.innerHTML = "";

    for(package of packages){
      var packagesDisplay = document.createElement("li");
      packagesDisplay.innerHTML = "<h2>" + package.flight.departure + " - " + package.flight.arrival + "</h2><h3>" + package.hotel.name + "</h3><h1>£" + package.price + "</h1><a href=''>Click for full details</a>"

      this.packagesUl.appendChild(packagesDisplay);
    }
  },

  displayPackageDetails: function(package){
    this.clearAll();
    this.packageDetailsDisplay.style.display = "block";

    this.packageHeader.innerText = package.flight.departure + " - " + package.flight.arrival + " £       " + package.price;

    this.packageFlightLi.innerHTML = "Departing " + package.flight.departure + ": " + package.flight.departDate + ",  " + package.flight.departTime + "<br> Arriving " + package.flight.arrival + ": " + package.flight.arriveDate + ", " + package.flight.arriveTime + "<br><h4>Price: £" + package.flight.price + "</h4>";

    this.packageHotelLi.innerHTML = "<h3>" + package.hotel.name + "</h3><br>Rating: " + package.hotel.stars + " Stars<br>£" + package.hotel.pricePerPerson + " <small>Price per person per night</small><br><h4>Price: £" + package.hotel.totalCost + "</h4>";
  }
}

module.exports = DefaultView;