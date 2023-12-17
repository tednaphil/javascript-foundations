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

function createNewProject(materialsArray, status) {
  return {
    materialsNeeded: materialsArray,
    status: status ||  `not started`
  }
}

// input: array of objects, and a string
//output: object with two known keys (materialsNeeded and status)

function compareMaterials(projectObject, suppliesObject) {
  // console.log(suppliesObject)
  // console.log('supplies list: ', suppliesObject.supplies)
  // console.log('materialsNeeded: ', projectObject.materialsNeeded)
  var materialsNeeded = []
  projectObject.materialsNeeded.forEach((object) => {materialsNeeded.push(object.name)})
  // console.log('materialsNeeded array: ', materialsNeeded)
  // console.log('supplies object array: ', suppliesObject.supplies)
  // console.log('do these arrays match?', materialsNeeded === suppliesObject.supplies)
  // console.log(suppliesObject.supplies.toString())
      if (materialsNeeded.toString() === suppliesObject.supplies.toString()) {
        return `Yay! You can start this project!`
      } else {
        return `Oh no! You need to go shopping before you can start this project!`
      }
}
// input: two arguments, projectObject and suppliesObject(has a property
//that's an array of objects)
// output: string

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}