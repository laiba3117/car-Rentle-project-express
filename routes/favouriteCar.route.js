const express = require ('express');
const router = express.Router();
const favouritCarController = require("../controllers/favouriteCar.controller");
const { authMiddleware, authorize } = require("../middlewares/auth.middleware");


router.get('/allcars',authMiddleware, authorize( 'USER','ADMIN',), favouritCarController.getAllFavouriteCars);
router.post('/addcars',authMiddleware, authorize('USER','ADMIN',), favouritCarController.addFavouriteCars);
router.delete('/removecars',authMiddleware, authorize('USER','ADMIN',), favouritCarController.removeFavouriteCars);


module.exports = router;

