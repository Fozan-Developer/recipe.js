module.exports = function sendMessage({id, argument}) {
    const message = messages(argument)[id];
    if(message.type == "log") return console.log(message.text);
    if(message.type == "warn") return console.warn(message.text);
    if(message.type == "error") return console.error(message.text);
};

function messages(argument) {
    return {
        load: {
            type: "log",
            text: "[Recipe]: Загружено " + argument + " рецепт"
        }
    };
};