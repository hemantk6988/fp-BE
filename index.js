const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config(); // To load environment variables from .env file

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

app.use(cors());
app.use(express.json());

app.use('/api/recipes', require('./routes/recipeRoutes'));
app.use('/api/cooking-tips', require('./routes/cookingTipRoutes'));
app.use('/api/culinary-experiences', require('./routes/culinaryExperienceRoutes'));
app.use('/api/recipes', require('./routes/recipeRoutes'));
app.use('/api/searchable-recipes', require('./routes/searchableRecipeRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
