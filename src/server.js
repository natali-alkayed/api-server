'use strict';
const express = require("express");
const app = express();
const FoodRouter = require('./routes/food.route');
const IngredientRouter = require('./routes/ingredient.route');
const ClothesRouter = require('./routes/clothes.route');

app.use(express.json());
app.use(FoodRouter);
app.use(IngredientRouter);
app.use(ClothesRouter);
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('hi');
}
function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}
app.use('*', notFoundHandler);
app.use(errorHandler)

module.exports = {
    start: start,
    app: app,
}

