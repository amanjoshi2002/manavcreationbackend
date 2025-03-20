const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const shirtCategoryRoutes = require('./routes/shirtCategoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');

dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Mount routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/categories', shirtCategoryRoutes);
app.use('/api/v1/subcategories', subCategoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});