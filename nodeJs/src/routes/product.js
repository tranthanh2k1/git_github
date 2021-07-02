const express = require('express');
const { categoryID } = require('../controllers/category');
const { create, list, remove, update, searchProduct, productByCate, productID } = require('../controllers/product');

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
// Danh sách sản phẩm thuộc danh mục
router.get('/productss/:cateId', productByCate);

router.param('id', productID);
router.param('cateId', categoryID);

module.exports = router;