const express = require("express");
const { createUser, loginUser, addtocart, removecartdata, getcartdata } = require("../controllers/user.controller");
const { isauth } = require("../middleware/auth");
const router = express.Router();

router.route('/register').post(createUser)
router.route('/login').post(loginUser)
router.route('/addtocart').post(isauth, addtocart)
router.route('/removecart').post( isauth,removecartdata)
router.route('/getcart').get(isauth,getcartdata)
module.exports = router