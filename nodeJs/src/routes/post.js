const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth');
const { create, read, update, remove } = require('../controllers/post');

router.post('/posts', verifyToken, create);
router.get('/posts', verifyToken, read);
router.put('/posts/:id', verifyToken, update);
router.delete('/posts/:id', verifyToken, remove);

module.exports = router;