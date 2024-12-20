const express = require ('express');
const router = express.Router();
const documentationController = require("../controllers/carDocumentation.controller");
const { authMiddleware, authorize } = require("../middlewares/auth.middleware");

  
router.post("/carDocument",authMiddleware, authorize('USER','ADMIN'),documentationController.newDocumentation);
module.exports = router;