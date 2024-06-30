const express = require("express");
const { createproduct, deleteproduct, getproduct, newcollection, poularinwomen } = require("../controllers/product.controller");
const router = express.Router();

router.route('/create').post(createproduct)
router.route('/delete/:id').delete(deleteproduct)
router.route('/get').get(getproduct)
router.route('/new').get(newcollection)
router.route('/women').get(poularinwomen)

module.exports = router