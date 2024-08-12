const express = require('express');
const CookingTip = require('../models/CookingTip');
const route = express.Router();

route.post('/', async (req, res) => {
  const newTip = new CookingTip(req.body);
  try {
    await newTip.save();
    res.status(201).send(newTip);
  } catch (err) {
    res.status(400).send(err);
  }
});

route.get('/', async (req, res) => {
  try {
    const tips = await CookingTip.find();
    res.send(tips);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = route;
