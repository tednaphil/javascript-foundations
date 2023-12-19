function createMeal(type, calorieGoal) {
    return {
        type,
        calorieGoal,
        dishes: []
    }
}

// input: string and number
//output: object

function addDish(mealObject, dishProperties) {
    // console.log('dish array: ', mealObject.dishes)
    if (dishProperties.calories <= mealObject.calorieGoal) {
        mealObject.dishes.push(dishProperties)
        mealObject.calorieGoal -= dishProperties.calories
    }
    // console.log('dishes array: ', mealObject.dishes)
    return mealObject
}
// input: meal object and object properties
// output: meal object

function calculateCalories(mealObject) {
    var calorieCount = 0
    // console.log('dish cals: ', mealObject.dishes[0].calories)
    mealObject.dishes.forEach((object) => (calorieCount += object.calories))
    // console.log('new calorie count: ', calorieCount)
    return `${mealObject.type} has a total of ${calorieCount} calories.`

}
// input: mealObject
// output: string (using interpolation of calorie count)
module.exports = {
    createMeal,
    addDish,
    calculateCalories
 }