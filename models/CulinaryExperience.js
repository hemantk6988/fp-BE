const mongoose = require('mongoose');

const culinaryExperienceSchema = new mongoose.Schema({
  experience: String,
  author: String,
});

const CulinaryExperience = mongoose.model('CulinaryExperience', culinaryExperienceSchema);

module.exports = CulinaryExperience;
