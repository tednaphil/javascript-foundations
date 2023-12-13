function createDragon(name, rider, temperment) {
  return {
    name,
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
  dragon.timesEaten ++
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false
  }
  return dragon
};

function findFireBreathers(dragonsArray) {
  var agressiveDragons = [];
  dragonsArray.forEach((object) => 
      {if(object.temperment === 'aggressive') {
        agressiveDragons.push(object)
        }
      }
  );
  return agressiveDragons
};

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}