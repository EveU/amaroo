var _ = require('lodash');

var Flights = function(){
  this.trips = [];
}

Flights.prototype = {
  addTrip: function(trip){
    this.trips.push(trip);
  },
  orderByPrice: function(){
    this.trips = _.orderBy(this.trips, ['price'], ['asc']);
  }
};

module.exports = Flights;