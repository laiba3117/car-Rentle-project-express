const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authMiddleware, authorize } = require("../middlewares/auth.middleware");

router.get("/users", authMiddleware, authorize('USER'), userController.getAllUsers);
router.get("/users/:id", authMiddleware, authorize('USER','ADMIN'), userController.getSingleUser);
router.put("/users/:id", authMiddleware,authorize('USER','ADMIN',), userController.updateUser);
router.delete("/users/:id", authMiddleware, authorize('USER','ADMIN'), userController.deleteUser);

module.exports = router;
