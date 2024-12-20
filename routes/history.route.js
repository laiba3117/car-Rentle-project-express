const express = require('express');
const router = express.Router();
const historyController = require("../controllers/historyCar.controller");

const { authMiddleware, authorize } = require("../middlewares/auth.middleware");

router.get("/getAllHistories",authMiddleware, authorize('USER'), historyController.getAllHistories);
router.post("/creatHistories",authMiddleware, authorize('USER','ADMIN'), historyController.createHistory);
router.delete("/:id",authMiddleware, authorize('USER','ADMIN'), historyController.deleteHistory);


module.exports = router;
