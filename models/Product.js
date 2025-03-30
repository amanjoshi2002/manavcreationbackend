const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  colorName: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }]
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShirtCategory',
    required: [true, 'Please provide category']
  },
  prices: {
    resellerPrice: {
      type: Number,
      required: [true, 'Please provide reseller price']
    },
    specialPrice: {
      type: Number,
      required: [true, 'Please provide special price']
    },
    mrp: {
      type: Number,
      required: [true, 'Please provide MRP']
    },
    regularPrice: {
      type: Number,
      required: [true, 'Please provide regular price']
    }
  },
  colors: [colorSchema],
  pdfLink: {
    type: String,
    required: [true, 'Please provide PDF link']
  },
  description: {
    type: String,
    required: [true, 'Please provide product description']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

productSchema.index({ name: 'text' });

module.exports = mongoose.model('Product', productSchema);