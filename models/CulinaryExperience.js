const mongoose = require('mongoose');

const culinaryExperienceSchema = new mongoose.Schema({
  experience: { type: String, required: true },
  author: { type: String, required: true },
});

const CulinaryExperience = mongoose.model('CulinaryExperience', culinaryExperienceSchema);

module.exports = CulinaryExperience;
