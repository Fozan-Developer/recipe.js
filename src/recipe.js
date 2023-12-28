const errors = require('./messages/errors.js');
const Debug = require('./debug.js');
// methods modules
const getRecipe = require('./methods/getRecipe.js');
const craftRecipe = require('./methods/craftRecipe.js');

class Recipe {
    constructor({ recipes, debug }) {
        this.recipes = recipes;
        this.debug = debug;

        Debug("validRecipe", this.recipes);
        if(debug == true) Debug("start", this.recipes);
    }
  
    list() {
        return this.recipes;
    }

    get(recipesId) {
        return getRecipe(recipesId, this.recipes);
    }

    craft(recipeId, inventory) {
        return craftRecipe(recipeId, inventory, this.recipes);
    }
};
  
module.exports = Recipe;