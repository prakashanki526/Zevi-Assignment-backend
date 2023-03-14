const { Router } = require("express");
const router = Router();
const {postProduct} = require('../controllers/appController');

// post methods
router.route('/postProduct').post(postProduct);


module.exports = router ;