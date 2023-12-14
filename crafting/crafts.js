function createMaterial(name, unit, costPerUnit) {
  return {
    name,
    unit,
    costPerUnit,
  }
};

//output: object

module.exports = {
  createMaterial,
  // calculateMaterialCost,
  // createSupplyCloset,
  // addSupply,
  // createNewProject,
  // compareMaterials
}