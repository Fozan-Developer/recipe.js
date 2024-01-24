module.exports = function({ recipeId, count, recipes }) {
    console.log(recipeId, recipes);
    const recipe = recipes.find(x=> x.id == recipeId);
    if(!recipe) throw Error("Такого рецепта не существует");

    let ingridients = [];
    for(id in recipe.ingridients) {
        ingridients.push({
            id: recipe.ingridients[id].id,
            count: Number(recipe.ingridients[id].count * count)
        });
    };

    return {
        recipe,
        ingridients
    };
};