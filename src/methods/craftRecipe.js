const getRecipe = require('./getRecipe.js');

module.exports = function craftRecipe({ recipeId, count, inventory, recipes }) {
    const recipe = getRecipe(recipeId, recipes);
    const ingridients = recipe.ingridients;

    let check = true;

    for(id in ingridients) {
        const ingridient = ingridients[id];

        const checkIngridientToInventory = inventory.find(x=> x.id == ingridient.id);

        if(checkIngridientToInventory == undefined || checkIngridientToInventory.count < Number(ingridient.count * count)) check = false;
    };

    return check;
};