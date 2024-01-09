var assert = require('chai').assert;
var { createRecipe, addRecipe, findRecipesByCuisine, rateRecipe } = require('./recipes');

describe('Recipe Collection', function() {

  it('should create a recipe', function() {
    var recipe = createRecipe('Spaghetti Carbonara', 'Italian', ['pasta', 'eggs', 'cheese']);

    assert.equal(recipe.name, 'Spaghetti Carbonara');
    assert.equal(recipe.cuisine, 'Italian');
    assert.deepEqual(recipe.ingredients, ['pasta', 'eggs', 'cheese']);
  });

  it('should add a recipe to the collection', function() {
    var collection = [];
    var recipe = createRecipe('Chicken Tikka Masala', 'Indian', ['chicken', 'yogurt', 'spices']);

    addRecipe(collection, recipe);

    assert.include(collection, recipe);
  });

  it('should find recipes by cuisine', function() {
    var collection = [];
    addRecipe(collection, createRecipe('Sushi', 'Japanese', ['rice', 'fish', 'seaweed']));
    addRecipe(collection, createRecipe('Ramen', 'Japanese', ['noodles', 'broth', 'meat']));
    addRecipe(collection, createRecipe('Tacos', 'Mexican', ['tortillas', 'meat', 'vegetables']));
    // console.log(addRecipe(collection, createRecipe('Sushi', 'Japanese', ['rice', 'fish', 'seaweed'])));
    // console.log(addRecipe(collection, createRecipe('Ramen', 'Japanese', ['noodles', 'broth', 'meat'])));
    // console.log(addRecipe(collection, createRecipe('Tacos', 'Mexican', ['tortillas', 'meat', 'vegetables'])));

    var japaneseRecipes = findRecipesByCuisine(collection, 'Japanese');

    assert.lengthOf(japaneseRecipes, 2);
    assert.deepEqual(japaneseRecipes, ['Sushi', 'Ramen']);
  });

  it('should allow rating a recipe', function() {
    var recipe = createRecipe('Pad Thai', 'Thai', ['noodles', 'shrimp', 'peanuts']);
    rateRecipe(recipe, 5);

    assert.equal(recipe.rating, 5);
  });

  it('should not add a recipe that already exists in the collection', function() {
    var collection = [];
    var recipe = createRecipe('Lasagna', 'Italian', ['pasta sheets', 'cheese', 'tomato sauce']);
    addRecipe(collection, recipe);

    // Attempt to add the same recipe again
    addRecipe(collection, recipe);

    assert.lengthOf(collection, 1); // Collection should still only have one recipe
  });

  it('should handle rating a recipe with invalid rating value', function() {
    var recipe = createRecipe('Falafel', 'Middle Eastern', ['chickpeas', 'herbs', 'spices']);

    // Attempt to rate with an invalid value
    rateRecipe(recipe, 6); // Assuming the rating scale is 1-5

    assert.isUndefined(recipe.rating); // Rating should not be set
  });

  it('should return an empty array if no recipes match the cuisine', function() {
    var collection = [];
    addRecipe(collection, createRecipe('Pizza', 'Italian', ['dough', 'cheese', 'tomato sauce']));

    var mexicanRecipes = findRecipesByCuisine(collection, 'Mexican');

    assert.isArray(mexicanRecipes);
    assert.isEmpty(mexicanRecipes);
  });

  it('should ignore invalid ingredients when creating a recipe', function() {
    var recipe = createRecipe('Banana Bread', 'American', ['bananas', '', null, 'flour']);

    // The invalid ingredients ('', null) should be ignored
    assert.deepEqual(recipe.ingredients, ['bananas', 'flour']);
  });

  it('should handle attempting to rate a recipe that does not exist', function() {
    // var collection = [];
    var nonExistentRecipe = { name: 'Ghost Cake', cuisine: 'Mystery', ingredients: [] };

    // Attempt to rate a recipe that is not in the collection
    rateRecipe(nonExistentRecipe, 4);

    assert.isUndefined(nonExistentRecipe.rating); // Rating should not be set
  });})