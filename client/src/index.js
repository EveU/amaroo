var sampleData = require('./sample');
var SearchResults = require('./models/SearchResults');
var moment = require('moment');
// var displayFlights = require('./views/defaultView').displayFlights;
// var displayHotels = require('./views/defaultView').displayHotels;
// var displayPackages = require('./views/defaultView').displayPackages;

var DefaultView = require('./views/defaultView');

var Hotel = require('./models/hotel');

var correctDate = function(date){
  var correctedDate = moment(date, "YYYY MM DD");
  return moment(correctedDate).format("DD" + "-" + "MM" +"-" + "YYYY");
}

window.onload = function(){

  var defaultView = new DefaultView(document);
  var flights = _.orderBy(sampleData.flights, ['price'], ['asc']);
  var hotels = _.orderBy(sampleData.hotels, ['pricePerPerson'], ['asc']);

  defaultView.displayFlights(flights);
  defaultView.displayHotels(hotels);

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
    
    var matchedFlights = currentSearch.matchingFlights();
    var matchedHotels = currentSearch.matchingHotels();
    var matchedPackages = currentSearch.matchingPackages();
    defaultView.displayPackages(currentSearch.packages);

    var links = document.getElementsByClassName('link');
    for(i=0; i<links.length; i++){
      links[i].onclick = function(){
        var packageId = this.value;
        defaultView.displayPackageDetails(currentSearch.packages[packageId]);
      }
    }
  }
};
