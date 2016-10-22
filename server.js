var spotcrime = require('spotcrime');

// somewhere near phoenix, az
var loc = {
  lat: 33.39657,
  lon: -112.03422
};

var radius = 0.01; // this is miles

spotcrime.getCrimes(loc, radius, function(err, crimes){
  console.log(crimes)

});
