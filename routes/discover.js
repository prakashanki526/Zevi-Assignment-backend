const { Router } = require("express");
const router = Router();
const {addToFavourites} = require("../controllers/appController")

// post methods
router.route('/addToFavourites').post(addToFavourites);

// get methods
// router.route('/user/:email').get(getUser);
// router.route('/generateOTP').get(localVariables, generateOTP);
// router.route('/verifyOTP').get(verifyOTP);
// router.route('/createResetSession').get(createResetSession);
// router.route('/doesUserExist/:email').get(checkUserExist);
// router.route('/getUsersList').get(verifyUser,getUsersList);
// router.route('/getAllMessages').get(getAllMessages);


module.exports = router ;

