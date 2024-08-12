const express = require('express');
const CulinaryExperience = require('../models/CulinaryExperience');
const router = express.Router();

router.post('/', async (req, res) => {
  const newExperience = new CulinaryExperience(req.body);
  try {
    await newExperience.save();
    res.status(201).send(newExperience);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const experiences = await CulinaryExperience.find();
    res.send(experiences);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
