const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  const user = await User.find().lean().exec();
  return res.status(200).send({ user });
});

//signup api
router.post("", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(201).send(user);
});

//login api

router.get("/find", async (req, res) => {
  const id = req.query.id;
  const user = await User.findById(id).lean().exec();
  return res.status(200).send({ user });
});

module.exports = router;
