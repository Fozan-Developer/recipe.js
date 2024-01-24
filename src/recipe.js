const errors = require('./messages/errors.js');
const Debug = require('./debug.js');
// methods modules
const getRecipe = require('./methods/getRecipe.js');
const craftRecipe = require('./methods/craftRecipe.js');
const getIngridients = require('./methods/getIngridients.js');

class Recipe {
    constructor(recipes) {
        this.recipes = recipes;
    };
  
    list() {
        return this.recipes;
    };

    get(recipesId) {
        return getRecipe(recipesId, this.recipes);
    };

    getIngridients(recipesId, count) {
        return getIngridients({ recipesId, count, recipes: this.recipes });
    };

    craft({ recipeId, count, inventory }) {
        return craftRecipe({ recipeId, count, inventory, recipes: this.recipes });
    };
};
  
module.exports = Recipe;