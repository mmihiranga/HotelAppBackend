const mongoose = require("mongoose");

const ReceptionSchema = new mongoose.Schema({

    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    receptionName: { type: String, required: true },
    status: { type: String, required: true },
    capacity : { type: String, required: true },
    entType : { type: String, required: true},
    category : { type: String, required: true},
    funcDate: {type: Date, required:true},
    addDate: {type: Date, required:true},
    photoPath:{ type: String, required: true},
    menu: {type: String, required:true},
    remarks: {type: String, required:false}
   
       
    
});

const Reception = mongoose.model('Reception', ReceptionSchema);

module.exports = Reception;