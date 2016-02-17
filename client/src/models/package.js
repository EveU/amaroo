var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');

var Package = function(flight, hotel){
  this.flight = flight;
  this.hotel = hotel;
  this.price = hotel.totalCost + flight.price;
};


module.exports = Package;