const express = require("express");
const mongoose = require("mongoose");
const connect = require("./configs/db");
const app = express();

//controller import
const userController = require("./controller/user.controller");
const foodController = require("./controller/food.controller");
const dairyController = require("./controller/Dairy.controller");
const breakfastController = require("./controller/Breakfast.controller");
const dinnerController = require("./controller/Dinner.controller");
//middlewares
app.use(express.json());
app.use("/users", userController);
app.use("/food", foodController);
app.use("/dairy", dairyController);
app.use("/list", breakfastController);
app.use("/dinner", dinnerController);

let port = process.env.PORT;

const start = async () => {
  await connect();
  app.listen(port, () => {
    console.log("listing to port " + port);
  });
};

module.exports = start;
