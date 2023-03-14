const { Router } = require("express");
const router = Router();
const {postProduct, postBrand} = require('../controllers/appController');

// post methods
router.route('/postProduct').post(postProduct);
router.route('/postBrand').post(postBrand);


module.exports = router ;