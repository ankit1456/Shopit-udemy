const express = require('express');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');

const app = express();

// const fileUpload = require('express-fileupload')
// // const dotenv = require('dotenv');
// const path = require('path')

// // Setting up config file
// if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })
// // dotenv.config({ path: 'backend/config/config.env' })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(fileUpload());

// Import all routes
const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');
// const payment = require('./routes/payment');
// const order = require('./routes/order');

app.use('/api/v1/products', productRouter);
app.use('/api/v1', authRouter);
// app.use('/api/v1', payment)
// app.use('/api/v1', order)

// if (process.env.NODE_ENV === 'PRODUCTION') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
//     })
// }

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
