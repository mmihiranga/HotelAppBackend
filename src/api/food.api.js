const express = require('express');
const router = express.Router();
const FoodController = require('../controller/food.controller');

module.exports = function (){
    router.get('/:name', FoodController.getFoodFromName);
    router.post('/create', FoodController.createFood);
    router.put('/update', FoodController.updateFood);
    router.delete('/delete/:id', FoodController.deleteFood);
    router.get('/', FoodController.getAllFoods);
    return router;
}