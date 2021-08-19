const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const connectDB = require("./src/config/database");
const RoomAPI = require("./src/api/room.api");
const ReceptionAPI = require("./src/api/reception.api");
const FoodAPI = require("./src/api/food.api");

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Hello Node!");
});

app.use("/room", RoomAPI());
app.use("/reception", ReceptionAPI());
app.use("/food", FoodAPI());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});