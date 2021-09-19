const express = require('express');
const router = express.Router();
const ReceptionController = require('../controller/reception.controller');
const multer = require("multer");


module.exports = function (){
    router.get('/', ReceptionController.getAllReception);
    router.get('/:id', ReceptionController.getReceptionID);
    router.post('/create', ReceptionController.addReception);
    router.put('/update', ReceptionController.updateReception);
    router.delete('/delete/:id', ReceptionController.deleteReception);
    router.get('/search/:id', ReceptionController.SearchReception);
    return router;
}