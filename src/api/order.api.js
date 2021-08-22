const express = require('express');
const router = express.Router();
const OrderController = require('../controller/order.controller');

module.exports = function (){
    router.post('/create', OrderController.createOrder);
    router.put('/update', OrderController.updateOrder);
    router.delete('/delete/:id', OrderController.deleteOrder);
    router.get('/', OrderController.getAllOrders);
    router.get('/:id', OrderController.getOrdersByUser);
    return router;
}