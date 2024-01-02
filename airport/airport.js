function createAirport(name, airlines, availableGates) {
  return {
    name,
    airlines,
    availableGates,
    message: ``
  }
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, numOfLandedPlanes) {
 var overflow = 0
  if (numOfLandedPlanes > airport.availableGates) {
    overflow = numOfLandedPlanes - airport.availableGates
    airport.availableGates = 0
    airport.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  } else {
    airport.availableGates -= numOfLandedPlanes
    airport.message = `Success! Current availability is ${airport.availableGates}.`
  }
  return airport
}

function checkAirlineLocations(airportsArray, airline) {
  var carriers = []
  airportsArray.forEach((object) => {
    if (object.airlines.includes(airline)) {
      carriers.push(object.name)
    }
  })
  return carriers
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
