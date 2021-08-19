const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    itemCode: { type: String, required: true },
    itemName: { type: String, required: true},
    description: { type: String, required: true},
    imageURL: { type: String, required: true},
    category: {type:String, required:true},
    price: {type:Number, required:true}
});

const Food = mongoose.model('food', FoodSchema);
module.exports = Food;