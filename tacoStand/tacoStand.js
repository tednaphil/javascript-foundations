// create function called create ingredient - export it
// two parameters - ingredient, price
// return an object with a name and price property
//name will be the first argument and price will be the second arg
function createIngredient(ingredient, price) {
    return {
        name: ingredient || 'unknown',
        price: price || 0.00
    }

    
    
    // if (ingredient === undefined || price === undefined) {
    //     return {
    //         name: 'unknown',
    //         price: 0.00
    //     }
    // } else
    //     return {
    //      name: ingredient,
    //      price,
    //  }
};

function createTaco(tacoName, ingredientsArray) {
    return {
        name: tacoName || 'custom',
        ingredients: ingredientsArray || []
    }
};

function addIngredientToTaco(tacoObject, ingredient) {
    // console.log('ingredients array: ',tacoObject.ingredients)
    tacoObject.ingredients.push(ingredient)
    // console.log('new ingredients array: ', tacoObject.ingredients)
    return tacoObject

};

function calculatePrice(tacoObject) {
    // console.log('ingredient price: ', tacoObject.ingredients[0].price)
    var cost = 0;
    tacoObject.ingredients.forEach((object) => (cost += object.price))
    // console.log('cost: ', cost)
    return cost

}

// input taco object
// output: number

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
