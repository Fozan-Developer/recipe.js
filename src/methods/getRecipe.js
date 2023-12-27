module.exports = function getRecipe(recipeId, recipes) {
    const recipe = recipes.find(x=> x.id == recipeId);

    return recipe;
};