const express = require('express');
const SearchableRecipe = require('../models/SearchableRecipe');
const router = express.Router();

// Add a new recipe to SearchableRecipes collection
router.post('/', async (req, res) => {
  try {
    const recipe = new SearchableRecipe(req.body);
    const savedRecipe = await recipe.save();
    res.json(savedRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search for recipes by name in SearchableRecipes collection
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    const recipes = await SearchableRecipe.find({ name: new RegExp(query, 'i') });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
