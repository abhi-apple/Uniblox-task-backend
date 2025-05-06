const express = require("express");
const router = express.Router();
const { getStats, generateDiscountCode } = require("../controllers/adminController");
const adminAuth = require("../middlewares/adminAuth");

router.get("/stats", adminAuth, getStats);
router.post("/discount", adminAuth, generateDiscountCode);

module.exports = router;
