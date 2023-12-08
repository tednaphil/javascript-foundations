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

module.exports = {
    createIngredient,
    createTaco,


}
