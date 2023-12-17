function createVampire(name, pet) {
 return {
  name,
  pet: pet || 'bat',
  thirsty: true,
  ouncesDrank: 0
 }
};

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return `I WANT TO SUCK YOUR BLOOD!`
  } else {
    return `No thanks, I am too full.`
  }
};

function drink(vampire) {
  if (vampire.thirsty) {
    vampire.ouncesDrank += 10}
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false
  }
  return vampire
};

function inquirePlace(locationArray, locationName) {
  if (locationArray.includes(locationName)) {
    return `Yes, I have spent some time in ${locationName}.`
  } else {
    return `No, I have never been to ${locationName}.`
  }
};

function findBatLovers(vampireArray) {
  var batLovers = []
  vampireArray.forEach((object) => {
    if (object.pet === 'bat') {
      batLovers.push(object.name)
    }
  })
  return batLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}