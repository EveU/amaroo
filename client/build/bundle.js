/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sampleData = __webpack_require__(1);
	
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "flights" : [
	    {
	      "departure" : "Edinburgh",
	      "arrival"   : "Melbourne",
	      "departing" : "28-03-2016 T08:00:00", 
	      "arriving"  : "29-03-2016 T10:00:00", 
	      "price"     : 248
	    },
	    {
	      "departure" : "Edinburgh",
	      "arrival"   : "Melbourne",
	      "departing" : "28-03-2016 T12:00:00", 
	      "arriving"  : "29-03-2016 T13:00:00", 
	      "price"     : 256
	    },
	    {
	      "departure" : "Edinburgh",
	      "arrival"   : "Sydney",
	      "departing" : "28-03-2016 T10:00:00", 
	      "arriving"  : "28-03-2016 T11:00:00", 
	      "price"     : 293
	    },
	    {
	      "departure" : "Edinburgh",
	      "arrival"   : "Sydney",
	      "departing" : "28-03-2016 T04:00:00", 
	      "arriving"  : "28-03-2016 T06:00:00", 
	      "price"     : 310
	    },
	    {
	      "departure" : "Edinburgh",
	      "arrival"   : "Canberra",
	      "departing" : "28-03-2016 T11:00:00", 
	      "arriving"  : "29-03-2016 T13:00:00", 
	      "price"     : 212
	    },
	    {
	      "departure" : "Edinburgh",
	      "arrival"   : "Canberra",
	      "departing" : "28-03-2016 T10:00:00", 
	      "arriving"  : "29-03-2016 T12:00:00", 
	      "price"     : 245
	    }
	  ],
	  "hotels" : [
	    {
	      "name"      : "The Plaza",
	      "pricePerPerson" : 32,
	      "rooms"     : 10,
	      "stars"     : 3,
	      "address"   : {
	        "building"  : "3",
	        "street"    : "Park Avenue",
	        "city"      : "Melbourne",
	        "zip"       : 3498890
	      }
	    },
	    {
	      "name"      : "The Grand Hotel",
	      "pricePerPerson" : 142,
	      "rooms"     : 43,
	      "stars"     : 5,
	      "address"   : {
	        "building"  : "90",
	        "street"    : "Grand Lane",
	        "city"      : "Melbourne",
	        "zip"       : 4788278
	      }
	    },
	    {
	      "name"      : "Bargain Hostel",
	      "pricePerPerson" : 12,
	      "rooms"     : 60,
	      "stars"     : 1,
	      "address"   : {
	        "building"  : "7",
	        "street"    : "Harbour Lane",
	        "city"      : "Melbourne",
	        "zip"       : 5789046
	      }
	    },
	    {
	      "name"      : "Four Seasons",
	      "pricePerPerson" : 78,
	      "rooms"     : 130,
	      "stars"     : 4,
	      "address"   : {
	        "building"  : "67",
	        "street"    : "Hyde Street",
	        "city"      : "Sydney",
	        "zip"       : 8947548
	      }
	    },
	    {
	      "name"      : "City Hotel",
	      "pricePerPerson" : 55,
	      "rooms"     : 14,
	      "stars"     : 2,
	      "address"   : {
	        "building"  : "10",
	        "street"    : "Bourne Street",
	        "city"      : "Sydney",
	        "zip"       : 3673290
	      }
	    },
	    {
	      "name"      : "Backpackers",
	      "pricePerPerson" : 12,
	      "rooms"     : 102,
	      "stars"     : 1,
	      "address"   : {
	        "building"  : "64",
	        "street"    : "Stell Avenue",
	        "city"      : "Sydney",
	        "zip"       : 4567824
	      }
	    },
	    {
	      "name"      : "Royal Hotel",
	      "pricePerPerson" : 45,
	      "rooms"     : 20,
	      "stars"     : 3,
	      "address"   : {
	        "building"  : "17",
	        "street"    : "Kestrel Street",
	        "city"      : "Canberra",
	        "zip"       : 567818
	      }
	    },
	    {
	      "name"      : "Surfer's Inn",
	      "pricePerPerson" : 80,
	      "rooms"     : 8,
	      "stars"     : 4,
	      "address"   : {
	        "building"  : "35",
	        "street"    : "High Street",
	        "city"      : "Canberra",
	        "zip"       : 6758473
	      }
	    },
	    {
	      "name"      : "Hilton",
	      "pricePerPerson" : 102,
	      "rooms"     : 170,
	      "stars"     : 4,
	      "address"   : {
	        "building"  : "50",
	        "street"    : "May Lane",
	        "city"      : "Canberra",
	        "zip"       : 5678427
	      }
	    }
	  ]
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map