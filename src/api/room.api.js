const express = require('express');
const router = express.Router();
const RoomController = require('../controller/room.controller');
const multer = require("multer");


module.exports = function (){
    router.get('/', RoomController.getAllRoom);
    router.get('/:id', RoomController.getRoomID);
    router.post('/create', RoomController.addRoom);
    router.put('/update', RoomController.updateRoom);
    router.delete('/delete/:id', RoomController.deleteRoom);
    return router;
}