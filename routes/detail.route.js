const express = require ('express');
const router = express.Router();
const detailsController = require("../controllers/details.controller");
const contactUs = require("../controllers/contactus");
const { authMiddleware, authorize } = require("../middlewares/auth.middleware");


router.post("/details" ,authMiddleware, authorize('ADMIN'), detailsController.registerCar);  
router.get("/get_details" ,authMiddleware, authorize('USER',"ADMIN"), detailsController.getDetails); 
router.get("/get_details/:id" ,authMiddleware, authorize('USER',"ADMIN"),  detailsController.getSingleCar);  
router.post("/contactUs",authMiddleware, authorize('USER'), contactUs.contactUs);
module.exports = router;
