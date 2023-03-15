const { Router } = require("express");
const router = Router();
const {addToFavourites, getAllProducts, getBrands, getFilteredProducts, getTrendingProducts, getCategories} = require("../controllers/appController")

// post methods
router.route('/addToFavourites').post(addToFavourites);

// get methods
router.route('/getFilteredProducts').get(getFilteredProducts);
router.route('/getAllProducts').get(getAllProducts);
router.route('/getTrendingProducts').get(getTrendingProducts);
router.route('/getCategories').get(getCategories);
router.route('/getBrands').get(getBrands);

module.exports = router ;

