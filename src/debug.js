const messages = require('./messages/messages');
const errors = require('./messages/errors');

module.exports = function debug(id, recipes) {
    if(id == "start") return start(recipes);
    if(id == "validRecipe") return validRecipe(recipes);
};

function validRecipe(recipes) {
    for(id in recipes) {
        const recipe = recipes[id];
        if(recipe.id == undefined || recipe.name == undefined || recipe.ingridients == undefined) return errors("dont_argument_in_recept");
        
        const ingridients = recipe.ingridients;
        if(Array.isArray(recipe.ingridients) == false) return errors("ingridients_dont_array")
        if(ingridients.length < 1) return errors("recept_dont_ingridients");
        for(i in ingridients) {
            const ingridient = ingridients[i];
            if(ingridient.name == undefined || ingridient.count == undefined) return errors("ingridient_dont_name_or_count");    
            if(ingridient.count < 1 || Number.isNaN(ingridient.count)) return errors("ingridient_dont_number"); 
        };
    };
};

function start(recipes) {
    messages({ id: "load", argument: recipes.length });
};