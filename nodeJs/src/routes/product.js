const express = require('express');
const { create } = require('../controllers/product');
// import express from 'express';
// import { create } from '../controllers/product';


const router = express.Router();

router.post('/producthaha', create);

module.exports = router;