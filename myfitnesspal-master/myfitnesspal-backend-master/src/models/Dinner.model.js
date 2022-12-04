const mongoose = require("mongoose");

const dinnerSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    foodId: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Dinner = mongoose.model("dinners", dinnerSchema);

module.exports = Dinner;
