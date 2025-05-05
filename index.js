const express = require('express')
const cors = require('cors')
const uuid = require('uuid')

const app = express()
const PORT = 9090
app.use(cors())
app.use(express.json())


app.use('/cart',require('./routes/cart.js'))

app.use('/checkout',require('./routes/checkout.js'))

app.use('/admin',require('./routes/admin.js'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))