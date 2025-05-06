// middlewares/adminAuth.js

const ADMIN_OTP = "123456"; // Hardcoded for testing

const adminAuth = (req, res, next) => {
//   const otp = req.headers["x-admin-otp"] || req.body.otp;
const otp = "123456"
  console.log(req.headers["x-admin-otp"],'check')
  if (otp === ADMIN_OTP) {
    return next();
  }

  return res.status(401).json({ message: "Unauthorized: Invalid admin OTP" });
};

module.exports = adminAuth;
