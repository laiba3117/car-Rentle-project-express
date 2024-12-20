const express = require('express');
const router = express.Router();
const billingController = require("../controllers/billing.controller");
const { authMiddleware, authorize } = require("../middlewares/auth.middleware");

router.post("/billing",authMiddleware, authorize('USER'), billingController.userInfo);
router.get("/",authMiddleware, authorize('USER','ADMIN'), billingController.getAllBilling);
router.get("/:id",authMiddleware, authorize('USER','ADMIN'), billingController.getByIdBilling);


module.exports = router;