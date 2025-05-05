const express=require('express')
const router=express.Router()

const {getStats,generateDiscountCode} = require('../controllers/adminController')

router.get('/stats',getStats)
router.post('/discount',generateDiscountCode)

module.exports=router