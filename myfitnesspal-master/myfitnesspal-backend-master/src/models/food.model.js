const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  comment: { type: String },
  foodId: { type: String },
  foodGroupId: { type: String },
  FoodDesc: { type: String },
  boost: { type: String },
  imageId: { type: String },
  Calories: { type: Number },
  Protein: { type: Number },
  Sodium: { type: Number },
  amount1: { type: Number },
  msreDesc1: { type: String },
  numberOfServings: { type: Number },
});

const Food = mongoose.model("foods1", foodSchema);

module.exports = Food;
