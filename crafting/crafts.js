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


module.exports = {
  createMaterial,
  calculateMaterialCost,
  // createSupplyCloset,
  // addSupply,
  // createNewProject,
  // compareMaterials
}