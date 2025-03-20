const express = require('express');
const router = express.Router();
const {
  createSubCategory,
  getAllSubCategories,
  getSubCategoriesByParent,
  updateSubCategory,
  deleteSubCategory
} = require('../controllers/subCategoryController');

router.route('/')
  .get(getAllSubCategories)
  .post(createSubCategory);

router.route('/:id')
  .put(updateSubCategory)
  .delete(deleteSubCategory);

router.route('/category/:categoryId')
  .get(getSubCategoriesByParent);

module.exports = router;