const mongoose = require('mongoose');

const shirtCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a category name'],
    trim: true,
    unique: true
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true,
    maxLength: [500, 'Description cannot be more than 500 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ShirtCategory', shirtCategorySchema);