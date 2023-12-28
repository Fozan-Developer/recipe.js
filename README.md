<h1 align="center">🧾 Recipe.js</h1>

<div align="center">

[![npm package](https://img.shields.io/npm/v/@mr_fozan/recipe.js?logo=npm&style=flat-square)](https://www.npmjs.org/package/@mr_fozan/json.db)

**Recipe.js is a powerful [Node.js](https://npmjs.com) module that allows you to work with recipes.**

</div>

## 📦 Install

**NPM**
```sh
npm instal @mr_fozan/recipe.js
```
**YARN**

```sh
$ yarn add @mr_fozan/recipe.js
```

## 🚀 Usage

```js
const Recipe = require('@mr_fozan/recipe.js');

const recipes = [
    {
        id: "juice",
        name: "Juice",
        ingridients: [
            {
                id: "apple",
                name: "Apple",
                count: 5
            }
        ]
    }
];

const recipe = new Recipe({ recipes, debug: true });
```

# 📋 Get a list of recipes

```js
const Recipe = require('@mr_fozan/recipe.js');
const recipe = new Recipe({ recipes, debug: true });

console.log(recipe.list());
```

# 🧾 Get a specific recipe

```js
const Recipe = require('@mr_fozan/recipe.js');
const recipe = new Recipe({ recipes, debug: true });

console.log(recipe.get("juice"));
```
# ⚒ Craft recipe

```js
const Recipe = require('@mr_fozan/recipe.js');
const recipe = new Recipe({ recipes, debug: true });

const inventory = [
    {
        id: "apple",
        count: 5
    }
];

const craft = recipe.craft("juice", invenory);

console.log(craft); // true
```
> If the result is *true*, then the craft is successful. If the result is *false*, then crafting is unsuccessful.

## 👥 Contributors

<p align="center">
  <a href="https://github.com/Fozan-Developer/recipe.js/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=Fozan-Developer/recipe.js" />
  </a>
</p>

## License

**The MIT License (MIT)**
