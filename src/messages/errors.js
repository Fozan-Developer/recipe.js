const errors = {
    "dont_argument_in_recept": {
        message: "Один из рецептов не имеет аргумента (id, name, ingridients).",
        type: "Error"
    },
    "ingridients_dont_array": {
        message: "Поле ingridients не является массивом.",
        type: "TypeError"
    },
    "recept_dont_ingridients": {
        message: "Рецепт не имеет ни одного ингридиента.",
        type: "Error"
    },
    "ingridient_dont_name_or_count": {
        message: "В рецепте один из ингридиентов не имеет имени или количества.",
        type: "Error"
    },
    "ingridient_dont_number": {
        message: "В рецепте ингридиент не является числом или меньше одного.",
        type: "Error"
    }
};

module.exports = function error(errorId) {
    const error = errors[errorId];

    if(error.type == "TypeError") return typeError(error.message);
    if(error.type == "Error") return dError(error.message);
};

function dError(message) {
    throw new Error(message);
};

function typeError(message) {
    throw new TypeError(message);
};