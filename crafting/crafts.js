function createMaterial(name, unit, costPerUnit) {
  return {
    name,
    unit,
    costPerUnit,
  }
};

function calculateMaterialCost(materialObject, num) {
  // console.log('arguemnt cpu: ', materialObject.costPerUnit)
  var cost = num * materialObject.costPerUnit
  // console.log('calculated cost: ', cost)
  return `${num} ${materialObject.unit}s of ${materialObject.name} costs $${cost}.`
};

function createSupplyCloset(supplyArray) {
  // console.log(supplyArray)
  // console.log(supplyArray[0].name)
  if (!supplyArray) {
    return {
      supplies: []
    }
  } else {
  var supplyList = [];
  for (var i = 0; i < supplyArray.length; i++) {
    supplyList.push(supplyArray[i].name)
  }
  // console.log('supplyArray: ', supplyList)
  return {
    supplies: supplyList
  }
}
};

// input: array of objects
// output: object with supplies as one key that is assigned to the value of an array of strings

function addSupply(closetObject, materialObject) {
  // console.log('closet supplies:', closetObject.supplies);
  // console.log('material name: ', materialObject.name)
  if (closetObject.supplies.includes(materialObject.name)) {
    return `You already have ${materialObject.name} in your closet!`
  } else {
  closetObject.supplies.push(materialObject.name)
  // console.log('updated closet list:', closetObject.supplies)
  return closetObject.supplies
  }
};

// input: two objects
// output: array of threads

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  // createNewProject,
  // compareMaterials
}