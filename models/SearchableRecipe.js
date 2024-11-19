const mongoose = require('mongoose');

const searchableRecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const SearchableRecipe = mongoose.model('searchableRecipes', searchableRecipeSchema);

module.exports = SearchableRecipe;
