const express = require('express');
const router = express.Router();

const { addToCart, getCart } = require('../controllers/cartController');

router.post('/add', addToCart);
router.post('/get', getCart);

module.exports = router;
