var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');

var Flight = function(flight){
  this.departure = flight.departure;
  this.arrival = flight.arrival;
  this.departing = flight.departing;
  this.arriving = flight.arriving;
  this.price = flight.price;
};


module.exports = Flight;