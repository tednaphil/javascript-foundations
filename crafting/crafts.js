function createMaterial(name, unit, costPerUnit) {
  return {
    name,
    unit,
    costPerUnit,
  }
};

function calculateMaterialCost(materialObject, num) {
  var cost = num * materialObject.costPerUnit
  return `${num} ${materialObject.unit}s of ${materialObject.name} costs $${cost}.`
};

function createSupplyCloset(supplyArray) {
  if (!supplyArray) {
    return {
      supplies: []
    }
  } else {
  var supplyList = [];
  for (var i = 0; i < supplyArray.length; i++) {
    supplyList.push(supplyArray[i].name)
  }
  return {
    supplies: supplyList
  }
}
};


function addSupply(closetObject, materialObject) {
  if (closetObject.supplies.includes(materialObject.name)) {
    return `You already have ${materialObject.name} in your closet!`
  } else {
  closetObject.supplies.push(materialObject.name)
  return closetObject.supplies
  }
};


function createNewProject(materialsArray, status) {
  return {
    materialsNeeded: materialsArray,
    status: status ||  `not started`
  }
}

function compareMaterials(projectObject, suppliesObject) {
  var materialsNeeded = []
  projectObject.materialsNeeded.forEach((object) => {materialsNeeded.push(object.name)})
      if (materialsNeeded.toString() === suppliesObject.supplies.toString()) {
        return `Yay! You can start this project!`
      } else {
        return `Oh no! You need to go shopping before you can start this project!`
      }
}


module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}