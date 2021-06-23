require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const categoryRoutes = require('./routes/category');

// Connection to DB
mongoose.connect('mongodb://localhost:27017/nodeJs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('DB connected'); // thành công
})
mongoose.connection.on('Error', err => {
    console.log(`DB connection error: ${err.message}`) // nếu lỗi
})

const app = express();
app.use(express.json());

// HTTP logger
app.use(morgan('dev'));
app.use(cookieParser());

// Routes Middlewares
app.use('/api', productRoutes);
app.use('/api', authRoutes);
app.use('/api', postRoutes);
app.use('/api', categoryRoutes);

const port = process.env.PORT || 8111;
app.listen(port, () => {
    console.log(`Server is runing on port http://localhost:${port}`);
})