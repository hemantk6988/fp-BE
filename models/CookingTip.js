const mongoose = require('mongoose');

const cookingTipSchema = new mongoose.Schema({
  tip: String,
  author: String,
});

const CookingTip = mongoose.model('cookingtip', cookingTipSchema);

module.exports = CookingTip;

