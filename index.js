const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const recipeRoutes = require('./routes/recipeRoutes');
const cookingTipRoutes = require('./routes/cookingTipRoutes');
const culinaryExperienceRoutes = require('./routes/culinaryExperienceRoutes');

const app = express();
app.use(express.json());
app.use(cors());

const url = process.env.MONGODB_URI

// Connect to MongoDB
mongoose.connect("mongodb+srv://hemant6988:hemant6988@db1.j3wl9.mongodb.net/project")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/cookingtips', cookingTipRoutes);
app.use('/api/culinaryexperiences', culinaryExperienceRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
