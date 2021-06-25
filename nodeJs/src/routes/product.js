const express = require('express');
const { create, list, remove, update, searchProduct, productID } = require('../controllers/product');

const router = express.Router();

// Thêm sản phẩm
router.post('/product', create);
// Danh sách sản phẩm
router.get('/products', list);
router.put('/product/:id', update);
// Xóa sản phẩm
router.delete('/product/:id', remove);

// tìm kiếm sản phẩm theo tên
router.get('/product/search', searchProduct);

router.param('id', productID);

module.exports = router;