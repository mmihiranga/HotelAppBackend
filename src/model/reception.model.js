const mongoose = require("mongoose");

const ReceptionSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    capacity : { type: String, required: true },
    entType : { type: String, required: true},
    catergory : { type: String, required: true},
    funcDate: {type: Date, required:true},
    menu: {type: Date, required:true},
    remarks: {type: String, required:true}
   
       
    
});

const Reception = mongoose.model('Reception', ReceptionSchema);

module.exports = Reception;