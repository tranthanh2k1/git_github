// installing
//  + npm init -y: tạo file package.json để chứa các module
//  + npm install express --save: install thư viện express
//  + npm i nodemon --save: tự động restart lại server
//  + npm i morgan --save: logger HTTP request

const express = require('express');  // import thư viện express
const morgan = require('morgan');
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');

// import express from 'express';
// import morgan from 'morgan';
// import mongoose from 'mongoose';
// import cookieParser from 'cookie-parser';


const app = express();

const productRoutes = require('./routes/product');
// import productRoutes from './routes/product';

// const handlebars = require('express-handlebars');
// const path = require('path');

app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

// Template engine: in ra giao diện
// app.engine('hbs', handlebars({ extname: '.hbs' }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resoucre/views'));      // set đường dẫn đến folder

// app.METHOD(PATH, HANDLER)
// app.get('/', (req, res) => {
//     res.render('home');         // chạy file home.handlebars
// })

// app.get('/news', (req, res) => {
//     res.render('news');
// })

/* ============ */
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

// HTTP logger
app.use(morgan('dev'));
// app.use(cookieParser());

// Routes Middlewares
app.use('/api', productRoutes);

const port = 3111;
app.listen(port, () => {
    console.log(`Server is runing on port http://localhost:${port}`);
})