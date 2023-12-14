function createFavoriteFood({dish, ingredients, isSpicy}) {//deconstruct experiment
    return {
        name: dish,
        ingredients: ingredients,
        isSpicy: isSpicy,
        timesOrdered: 0
    }
};

function commentOnSpiciness({isSpicy, name}) {
    if (isSpicy) {
        return `Wow, this ${name} is so spicy!`
    } else {
        return `Phew, this ${name} is not very spicy.`
    }
};

function orderFood(dishObject) {
    dishObject.timesOrdered += 1
    return dishObject
};

function createShoppingList(foodArray) {
    var shoppingList = []
    for (var i = 0; i < foodArray.length; i++) {
        var shoppingList = shoppingList.concat(foodArray[i].ingredients)
     } return shoppingList
};

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
 };