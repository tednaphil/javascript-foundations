function createMeal(name, specialRequests, tableNumber) {
  return {
    name,
    specialRequests,
    tableNumber,
    complete: false,
  }
}

function getMade(meal) {
  meal.complete = true
  return meal
}

function announceMeal(meal) {
  if (meal.complete) {
    return `Order up - ${meal.name} for table ${meal.tableNumber}!`
  } else {
    return `This ${meal.name} is not completed yet`
  }
}

function createOrder(orderObject) {
  return {
    tableNumber: orderObject.name,
    meals: orderObject.meals,
    completedMeals: []
  }
}

function cookMeal(orderObject, meal) {
  if (meal.tableNumber === orderObject.tableNumber) {
    meal.complete = true
    orderObject.completedMeals.push(meal.name)
  }
  // console.log(`is meal complete?`, meal.complete)
  // console.log(orderObject.completedMeals)
  // console.log(meal.name)
  return orderObject
}

function listOrders(orderObject) {
  var orderNames = []
  orderObject.meals.forEach((object) =>
  orderNames.push(object.name))
  return orderNames
}

function listSpecialRequests(orderObject) {
  var specialRequests = []
  orderObject.meals.forEach((object) => {
    object.specialRequests.forEach((string) => specialRequests.push(string))
  })
  return specialRequests
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
