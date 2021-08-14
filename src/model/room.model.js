const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    roomName: { type: String, required: true },
    status: { type: String, required: true },
    phone: { type: String, required: true },
    adultNo : { type: String, required: true },
    childNo : { type: String, required: true},
    roomNo : { type: String, required: true},
    checkIn: {type: Date, required:true},
    checkOut: {type: Date, required:true},
    remarks: {type: String, required:true},
    loyalty: {type: String, required:true}
       
    
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;