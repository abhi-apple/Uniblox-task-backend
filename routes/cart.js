const express=require('express')
const router=express.Router()

const {addToCard,getCart} = require('../controllers/cartController')

router.post('/add',addToCard)
router.post('/get',getCart)

module.exports=router