const express = require('express');
const CookingTip = require('../models/CookingTip');
const router = express.Router();

// Get all cooking tips
router.get('/', async (req, res) => {
  try {
    const tips = await CookingTip.find();
    res.json(tips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new cooking tip
router.post('/', async (req, res) => {
  const tip = new CookingTip(req.body);
  try {
    const newTip = await tip.save();
    res.status(201).json(newTip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a cooking tip
router.delete('/:id', async (req, res) => {
  try {
    await CookingTip.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cooking tip deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

