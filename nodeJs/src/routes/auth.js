const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth');
const { register, login } = require('../controllers/auth');


router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;