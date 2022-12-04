const mongoose = require("mongoose");

const dairySchema = new mongoose.Schema(
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

const Dairy = mongoose.model("dairys", dairySchema);

module.exports = Dairy;
