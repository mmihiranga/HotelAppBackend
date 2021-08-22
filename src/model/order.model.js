const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    orderNo: { type: String, required: true },
    orderDate: { type: Date, required: true },
    itemList:{ type: Array, required: true },
    status:{ type: String, required: true },
    amount:{ type: Number, required: true },
    customer:{ type: Object, required: true },
    userId:{ type: String, required: true }
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;