const { Router } = require("express");
const router = Router();
const {addToFavourites, getAllProducts, getFilteredProducts, getTrendingProducts, getCategories} = require("../controllers/appController")

// post methods
router.route('/addToFavourites').post(addToFavourites);

// get methods
router.route('/getFilteredProducts/:name').get(getFilteredProducts);
router.route('/getAllProducts').get(getAllProducts);
router.route('/getTrendingProducts').get(getTrendingProducts);
router.route('/getCategories').get(getCategories);

module.exports = router ;

