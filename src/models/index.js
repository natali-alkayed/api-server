'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const clothes = require('./clothes.model');
const foodsSchema = require('./food.model');
const ingredientsSchema = require('./ingredient.model');
const Collection = require('./lib/collection');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// let sequelize = new Sequelize(POSTGRES_URI, {});//if we don't have production or testing we can send {}

const foodTable = foodsSchema(sequelize, DataTypes);
const ingredientTable = ingredientsSchema(sequelize, DataTypes);


const foodCollection = new Collection(foodTable);
const ingredientCollection = new Collection(ingredientTable);

foodTable.hasOne(ingredientTable, {
    foreignKey: 'foodId',
    sourceKey: 'id',
});
ingredientTable.belongsTo(foodTable, {
    foreignKey: 'foodId',
    targetKey: 'id',
});

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    FoodModel: foodCollection,
    IngredientModel: ingredientCollection,
}