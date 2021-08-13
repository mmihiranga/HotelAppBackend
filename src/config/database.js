const mongoose = require("mongoose");

const URI = "mongodb+srv://admin:admin@cluster0.wsvqu.mongodb.net/HotelApp?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    console.log("Database Connected");
}

module.exports = connectDB;