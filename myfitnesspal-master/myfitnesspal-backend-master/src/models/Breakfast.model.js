const mongoose = require("mongoose");

const breakfastSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    foodId: { type: String, required: true },
    cat: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Breakfast = mongoose.model("breakfasts", breakfastSchema);

module.exports = Breakfast;
