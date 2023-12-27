module.exports = function debug(id, recipes) {
    if(id == "start") return start(recipes);
};

function start(recipes) {
    console.log("[Recipe]: Загружено " + recipes.length + " рецепт");

    /*function Recipe(id, name) {
        this.id = id;
        this.name = name;
    }
    
    for(let i=0; i < recipes.length; i++) {
        const recipe = new Recipe(recipes[i].id, recipes[i].name);

        // if(i < recipes.length) return console.table(recipe);
    };*/
};