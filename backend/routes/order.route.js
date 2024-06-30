const express = require('express');
const { placeorder, verifyorder, userorder, listorder, updatestatus } = require('../controllers/order.controller');
const { isauth } = require('../middleware/auth')
const router = express.Router();

router.route('/create').post(isauth,placeorder);
router.route('/verify').post(verifyorder);
router.route('/myorders').post(isauth,userorder);
router.route('/list').get(listorder)
router.route('/update').post(updatestatus)
module.exports = router