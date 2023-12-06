function createDragon(name, rider, temperment) {
return {
  name: name,
  rider: rider,
  temperment: temperment,
  timesEaten: 0
}
};

function greetRider(dragon) {
return `Hi, ${dragon.rider}!`
};


module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}