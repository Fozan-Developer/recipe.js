const errors = require('./errors.js');
const Debug = require('./debug.js');
// methods modules
const getRecipe = require('./methods/getRecipe.js');
const craftRecipe = require('./methods/craftRecipe.js');

class Recipe {
    constructor({ recipes, debug }) {
        this.recipes = recipes;
        this.debug = debug;

        if(debug == true) Debug("start", this.recipes)
    }
  
    list() {
        return this.recipes;
    }

    get(recipesId) {
        return getRecipe(recipesId, this.recipes);
    }

    craft(receptId, inventory) {
        return craft(receptId, inventory);
    }
}
  
module.exports = Recipe