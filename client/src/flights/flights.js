var _ = require('lodash');

var Flights = function(){
  this.trips = [];
  this.onDateTrips = [];
}

Flights.prototype = {
  addTrip: function(trip){
    this.trips.push(trip);
  },
  orderByPrice: function(){
    this.trips = _.orderBy(this.trips, ['price'], ['asc']);
  },
  onDate: function(date){
    this.onDateTrips = _.filter(this.trips, ['departing', date]);
  }
};

module.exports = Flights;