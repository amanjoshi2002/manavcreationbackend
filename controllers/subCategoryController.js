const SubCategory = require('../models/SubCategory');
const ShirtCategory = require('../models/ShirtCategory');

// Create new subcategory
exports.createSubCategory = async (req, res) => {
  try {
    // Check if parent category exists
    const parentCategory = await ShirtCategory.findById(req.body.parentCategory);
    if (!parentCategory) {
      return res.status(404).json({
        success: false,
        error: 'Parent category not found'
      });
    }

    const subCategory = await SubCategory.create(req.body);
    res.status(201).json({
      success: true,
      data: subCategory
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all subcategories
exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('parentCategory', 'name');
    res.status(200).json({
      success: true,
      count: subCategories.length,
      data: subCategories
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get subcategories by parent category
exports.getSubCategoriesByParent = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ parentCategory: req.params.categoryId });
    res.status(200).json({
      success: true,
      count: subCategories.length,
      data: subCategories
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update subcategory
exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!subCategory) {
      return res.status(404).json({
        success: false,
        error: 'Subcategory not found'
      });
    }
    res.status(200).json({
      success: true,
      data: subCategory
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete subcategory
exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory) {
      return res.status(404).json({
        success: false,
        error: 'Subcategory not found'
      });
    }
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};