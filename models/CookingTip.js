const mongoose = require('mongoose');

const cookingTipSchema = new mongoose.Schema({
  tip: { type: String, required: true },
  author: { type: String, required: true },
});

const CookingTip = mongoose.model('CookingTip', cookingTipSchema);

module.exports = CookingTip;

