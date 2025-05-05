const express=require('express')
const router=express.Router()

const {checkingOut} = require('../controllers/checkoutController')

router.post('/',checkingOut)

module.exports=router