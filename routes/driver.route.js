const express = require("express");
const router = express.Router();
const driverController = require('../controllers/driver.controller');
const { authMiddleware, authorize } = require("../middlewares/auth.middleware");


router.post("/becomeADriver",authMiddleware, authorize('USER'), driverController.becomeDriver);
router.get("findDrive",authMiddleware, authorize('USER'), driverController.getAllDrivers);

module.exports = router;
