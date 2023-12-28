const getRecipe = require('./getRecipe.js');

module.exports = function craftRecipe(recipeId, inventory, recipes) {
    const recipe = getRecipe(recipeId, recipes);
    const ingridients = recipe.ingridients;

    let check = true;

    for(id in ingridients) {
        const ingridient = ingridients[id];

        const checkIngridientToInventory = inventory.find(x=> x.id == ingridient.id);

        if(checkIngridientToInventory == undefined || checkIngridientToInventory.count < ingridient.count) check = false;
    };

    return check;
};