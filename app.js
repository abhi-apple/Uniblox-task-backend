// app.js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))


app.use(express.json());

app.use('/cart', require('./routes/cart'));
app.use('/checkout', require('./routes/checkout'));
app.use('/admin', require('./routes/admin'));

module.exports = app;
