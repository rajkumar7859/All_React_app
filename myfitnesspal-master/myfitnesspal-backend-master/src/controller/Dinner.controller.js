const express = require("express");
const Dinner = require("../models/Dinner.model");

const router = express.Router();

router.post("", async (req, res) => {
  const item = await Dinner.create(req.body);
  return res.status(201).send(item);
});

router.get("", async (req, res) => {
  const user = await Dinner.find().lean().exec();
  return res.status(200).send({ user });
});

router.get("/user", async (req, res) => {
  const key = req.query.key;
  const cate = req.query.cat;
  Dinner.find({ userId: key, cat: cate }).then((result) => {
    return res.status(200).send(result);
  });
});

module.exports = router;
