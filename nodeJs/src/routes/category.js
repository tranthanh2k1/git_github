const express = require('express');
const router = express.Router();

const { list, create, update, remove, categoryID } = require('../controllers/category');

router.get('/categories', list);
router.post('/category', create);
router.put('/category/:id', update);
router.delete('/category/:id', remove);

router.param('id', categoryID); // lấy id của danh mục


module.exports = router;