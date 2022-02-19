const express = require('express');
const {
  newProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/').get(getProducts).post(isAuthenticatedUser, newProduct);
router
  .route('/:id')
  .get(getSingleProduct)
  .patch(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

module.exports = router;
