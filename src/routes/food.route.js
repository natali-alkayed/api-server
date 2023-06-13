const express = require('express');
const FoodRouter = express.Router();
const Collection = require('../models/lib/collection');
const { FoodModel, IngredientModel } = require('../models/index');

FoodRouter.get("/food", getAllFoods);
FoodRouter.get("/food/:id", getOneFood);
FoodRouter.post("/food", createFood);
FoodRouter.put("/food/:id", updateFood);
FoodRouter.delete("/food/:id", deleteFood);

// FoodRouter.get("/foodIngredient/:id", foodIngredient);
// async function foodIngredient(req, res) {
//     const FoodId = parseInt(req.params.id);
//     let foodIngredientResult = await IngredientModel.readFoodIngredient(FoodId);
//     res.status(200).json(foodIngredientResult);
// }

async function getAllFoods(req, res) {
    let FoodResult = await FoodModel.read();
    res.status(200).json(FoodResult);
}

async function getOneFood(req, res) {
    const FoodId = parseInt(req.params.id);
    let Food = await FoodModel.read(FoodId)
    res.status(200).json(Food);
}
async function createFood(req, res) {
    let newFood = req.body;
    let Food = await FoodModel.add(newFood);
    res.status(201).json(Food);
}
async function updateFood(req, res) {
    let FoodId = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await FoodModel.update(updateFood, FoodId);
    res.status(201).json(foundFood);
}
async function deleteFood(req, res) {
    let FoodId = parseInt(req.params.id);
    let deleteFood = await FoodModel.delete(FoodId);
    res.status(204).json(deleteFood);
}

module.exports = FoodRouter;