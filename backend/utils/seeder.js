const dotenv = require('dotenv');
const Product = require('../models/productModel');
const connectDatabase = require('../config/database');
const products = require('../data/products.json');

// Setting dotenv file
dotenv.config({ path: `${__dirname}/../config/config.env` });

connectDatabase();

const loadProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Products deleted successfully');

    await Product.insertMany(products);
    console.log('All Products loaded successfully');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

loadProducts();
