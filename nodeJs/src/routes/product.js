const express = require('express');
const { create } = require('../controllers/product');

const router = express.Router();

router.post('/product', create);

module.exports = router;