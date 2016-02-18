var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');

var Hotel = function(hotel){
  this.name = hotel.name;
  this.pricePerPerson = hotel.pricePerPerson;
  this.rooms = hotel.rooms;
  this.stars = hotel.stars;
  this.address = hotel.address;
  this.lengthOfStay = 0;
  this.totalCost = 0;
};

Hotel.prototype = {
  calculatePrice: function(){
    this.totalCost = (this.lengthOfStay * this.pricePerPerson);
  },

  calculateStay: function(search){
    var checkIn = moment(search.departDate, "DD MM YYYY");
    var checkOut = moment(search.returnDate, "DD MM YYYY");
    this.lengthOfStay = checkOut.diff(checkIn, "days");
  }
};

module.exports = Hotel;