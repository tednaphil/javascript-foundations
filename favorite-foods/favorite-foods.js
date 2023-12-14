function createFavoriteFood({dish, ingredients, isSpicy}) {//deconstruct experiment
    // console.log(foodObject.dish)
    // console.log(foodObject.ingredients)
    return {
        name: dish,
        ingredients: ingredients,
        isSpicy: isSpicy,
        timesOrdered: 0
    }

};

function commentOnSpiciness({isSpicy, name}) {
//    console.log(dishObject.isSpicy, 'is it spicy?')
    if (isSpicy) {
        return `Wow, this ${name} is so spicy!`
    } else {
        return `Phew, this ${name} is not very spicy.`
    }
    
    //if the item is spicy say "wow..."
    //if the item is not spicy say "phew..."
};

function orderFood(dishObject) {
    dishObject.timesOrdered += 1
    // console.log(dishObject.timesOrdered)
    // console.log('dishObject post increment: ', dishObject)
    return dishObject
};

function createShoppingList(foodArray) {
    var shoppingList = []
    for (var i = 0; i < foodArray.length; i++) {
        shoppingList.push(foodArray[i].ingredients)
    }
    var shoppingList = shoppingList[0].concat(shoppingList[1])
    return shoppingList
};

//input: array of objects
//return: array

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
 };