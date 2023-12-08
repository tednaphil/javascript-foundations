function createDragon(name, rider, temperment) {
  return {
    name, //syntactic sugar
    rider,
    temperment,
    timesEaten: 0,
    hungry: true
  }
};

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
};

function eat(dragon) {
  // console.log('dragon fed +1: ', dragon.timesEaten = dragon.timesEaten + 1);
  // return dragon.timesEaten = (dragon.timesEaten + 1)
  // console.log('dragon times eaten: ', dragon.timesEaten)
  dragon.timesEaten ++
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false
  }
  return dragon
};

function findFireBreathers(dragonsArray) {
  // for (var object in dragonsArray) {
  //   if (object.temperment === 'aggressive') {
  //     fireBreathers.push(object)
  //   }
  // } console.log('fireBreathers: ', fireBreathers)
  //   return 
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}