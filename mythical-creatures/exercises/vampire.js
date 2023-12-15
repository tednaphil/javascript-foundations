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
    // console.log('vampire.thirsty value: ', vampire.thirsty)
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
  // console.log(vampire.ouncesDrank)
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
  console.log('batLovers array: ', batLovers)
  return batLovers
}
// input: array of objects
// output: array of strings
module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}