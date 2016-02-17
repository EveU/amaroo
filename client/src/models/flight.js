var _ = require('lodash');
var sampleData = require('./../sample');
var moment = require('moment');

var Flight = function(flight){
  this.departure = flight.departure;
  this.arrival = flight.arrival;
  this.departDate = flight.departing.substring(0,10);
  this.departTime = flight.departing.substring(12,20);
  this.arriveDate = flight.arriving.substring(0,10);
  this.arriveTime = flight.arriving.substring(12,20);
  this.price = flight.price;
};


module.exports = Flight;