function createFavoriteFood(foodObject) {
    // console.log(foodObject.dish)
    // console.log(foodObject.ingredients)
    return {
        name: foodObject.dish,
        ingredients: foodObject.ingredients,
        isSpicy: foodObject.isSpicy,
        timesOrdered: 0
    }

};

function commentOnSpiciness(dishObject) {
//    console.log(dishObject.isSpicy, 'is it spicy?')
    if (dishObject.isSpicy === true) {
        return `Wow, this ${dishObject.name} is so spicy!`
    } else {
        return `Phew, this ${dishObject.name} is not very spicy.`
    }
    
    //if the item is spicy say "wow..."
    //if the item is not spicy say "phew..."
};

function orderFood(dishObject) {
    dishObject.timesOrdered += 1
    // console.log(dishObject.timesOrdered)
    // console.log('dishObject post increment: ', dishObject)
    return dishObject
}


module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    // createShoppingList
 };