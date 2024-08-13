const express = require('express');
const CulinaryExperience = require('../models/CulinaryExperience');
const router = express.Router();

// Get all culinary experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await CulinaryExperience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new culinary experience
router.post('/', async (req, res) => {
  const experience = new CulinaryExperience(req.body);
  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a culinary experience
router.delete('/:id', async (req, res) => {
  try {
    await CulinaryExperience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Culinary experience deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

