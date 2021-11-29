const Product = require("../models/productModel");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");
const products = require("../data/products");

// Setting dotenv file
dotenv.config({ path: `${__dirname}/../config/config.env` });

connectDatabase();

const loadProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products deleted successfully");

    await Product.insertMany(products);
    console.log("All Products loaded successfully");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

loadProducts();
