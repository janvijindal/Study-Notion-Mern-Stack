const Razorpay = require("razorpay");
const dotenv=require('dotenv')
dotenv.config()

exports.instance = new Razorpay({
    key_id: "rzp_test_zZEbj4IycBqROQ",
    key_secret: process.env.RAZORPAY_SECRET,
});