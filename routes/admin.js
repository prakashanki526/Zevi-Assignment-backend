const { Router } = require("express");
const router = Router();
const {postProduct, postBrand, postCategory} = require('../controllers/appController');

// post methods
router.route('/postProduct').post(postProduct);
router.route('/postBrand').post(postBrand);
router.route('/postCategory').post(postCategory);


module.exports = router ;