var sampleData = require('./sample');
var SearchResults = require('./models/SearchResults');
var moment = require('moment');
var displayFlights = require('./views/defaultView').displayFlights;
var displayHotels = require('./views/defaultView').displayHotels;

var Hotel = require('./models/hotel');

var correctDate = function(date){
  var correctedDate = moment(date, "YYYY MM DD");
  return moment(correctedDate).format("DD" + "-" + "MM" +"-" + "YYYY");
}

window.onload = function(){

  // var placeholderDepart = moment();
  // var placeholderArrival = moment().add(1, "days");

  // var userInput = {
  //   tripOrigin: "",
  //   tripDestination: "",
  //   departDate: correctDate(placeholderDepart),
  //   returnDate: correctDate(placeholderArrival)
  // }

  // var currentSearch = new SearchResults();
  // currentSearch.updateUserInput(userInput);

  // displayFlights(sampleData.flights);
  // displayHotels(sampleData.hotels);

  var button = document.getElementById('searchButton');

  button.onclick = function(){

    var leaveFromInput = document.getElementById('leavingFrom');
    var goingToInput = document.getElementById('goingTo');
    var departureDate = document.getElementById('departureDate');
    var returnDate = document.getElementById('returnDate');

    var userInput = {
      tripOrigin: leaveFromInput.value,
      tripDestination: goingToInput.value,
      departDate: correctDate(departureDate.value),
      returnDate: correctDate(returnDate.value)
    }

    var currentSearch = new SearchResults();
    currentSearch.updateUserInput(userInput);
    
    // var lengthOfStay = currentSearch.lengthOfStay();

    var matchedFlights = currentSearch.matchingFlights();
    displayFlights(currentSearch.flights);

    var matchedHotels = currentSearch.matchingHotels();
    displayHotels(currentSearch.hotels);
  }
};