const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String },
  sex: { type: String },
  dob: { type: String },
  country: { type: String },
  zipcode: { type: Number },
  height: { type: String },
  health_data: {
    weight_goal: { type: String },
    activity: { type: String },
    goaled_weight: { type: String },
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
