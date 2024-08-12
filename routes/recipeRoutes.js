const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

router.post('/', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  try {
    await newRecipe.save();
    res.status(201).send(newRecipe);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

