function createRecipe(name, cuisine, ingredients) {
    var ingredientsToAdd = []
    ingredients.forEach((element) => {
        if (element) {
            ingredientsToAdd.push(element)
        }
    })
    console.log(ingredientsToAdd)
    return {
        name,
        cuisine,
        ingredients: ingredientsToAdd,
        isRecipe: true
    }
}

function addRecipe(collection, recipe) {
//    console.log(collection.includes(recipe))
    if (!collection.includes(recipe)){
        collection.push(recipe)
    }
    // return collection
}

function findRecipesByCuisine(collection, cuisine) {
    var cuisineRecipes = []
    collection.forEach((object) => {
        if (cuisine === object.cuisine) {
            cuisineRecipes.push(object.name)
        }
    })
    return cuisineRecipes
}

function rateRecipe(recipe, rating) {
    if (recipe.isRecipe) {
        if (rating >= 0 && rating <= 5) {
            recipe.rating = rating
        } else {
            return `${rating} is not a valid rating. Please rate your dish 1-5!`
        } 
    } else {
        return `${recipe.name} is not part of the collection.`
    }
}


module.exports = { 
    createRecipe, 
    addRecipe, 
    findRecipesByCuisine, 
    rateRecipe
}