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

        flightsDisplay.innerHTML = "<h2>" + flight.departure + " - " + flight.arrival + "</h2><p>Departs: " + flight.date + ",  " + flight.time + "<br>Arrives: " + flight.arriveDate + ", " + flight.arriveTime + "<br><h2>£" + flight.price + "pp</h2>";

        this.flightsUl.appendChild(flightsDisplay);
      }
    }
    else {
      this.flightsUl.innerHTML = "No matching flights.";
    }
  },

  displayHotels: function(hotels){
    this.hotelsDisplay.style.display = "block";
    this.hotelsUl.innerHTML = "";

    for(hotel of hotels){

      var hotelsDisplay = document.createElement("li");
      hotelsDisplay.innerHTML = "<h2>" + hotel.name + "</h2><h3>" + hotel.address.city + "</h3><img src='../images/" + hotel.stars + "star.png'/><h2>£" + hotel.pricePerPerson + "</h2>per person per night";
      this.hotelsUl.appendChild(hotelsDisplay);
    }

  },

  displayPackages: function(packages){
    this.clearAll();
    this.packagesDisplay.style.display = "block";

    var packagesUl = document.getElementById("allPackages");
    this.packagesUl.innerHTML = "";

    for(package of packages){
      var packagesDisplay = document.createElement("li");
      packagesDisplay.innerHTML = "<h2>" + package.flight.departure + " - " + package.flight.arrival + "</h2><img src='../images/" + package.hotel.stars + "star.png'/><h3>" + package.hotel.name + "</h3><h1>£" + package.price + "</h1><a href=''>Click for full details</a>"

      this.packagesUl.appendChild(packagesDisplay);
    }
  },

  displayPackageDetails: function(package){
    this.clearAll();
    this.packageDetailsDisplay.style.display = "block";

    this.packageDetailsDisplay.innerHTML = "<h1>" + package.flight.departure + " - " + package.flight.arrival + "</h1><h1>£" + package.price + "</h1><hr><h5>Departing " + package.flight.departure + ": " + package.flight.departDate + ",  " + package.flight.departTime + "</h5><h5> Arriving " + package.flight.arrival + ": " + package.flight.arriveDate + ", " + package.flight.arriveTime + "</h5><h3>Price: £" + package.flight.price + "</h3><hr><h2>" + package.hotel.name + " <img src='../images/" + hotel.stars + "star.png'/></h2><h5>£" + package.hotel.pricePerPerson + " per person per night</h5><h3>Price: £" + package.hotel.totalCost + "</h3><br><button>Book</button>";
  }
}

module.exports = DefaultView;