// installing
//  + npm init -y: tạo file package.json để chứa các module
//  + npm install express --save: install thư viện express
//  + npm i nodemon --save: tự động restart lại server
//  + npm i morgan --save: logger HTTP request

// in ra màn hình Hello word
const express = require('express');  // import thư viện express
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('dev'));

// Template engine: in ra giao diện
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoucre/views'));      // set đường dẫn đến folder

// app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => {
    res.render('home');         // chạy file home.handlebars
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Server is runing on port http://localhost:${port}`);
})