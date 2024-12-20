const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");


router.post("/signup", authController. SignupUser);
router.post("/signin", authController. SigninUser);
router.post("/sendmail",authController.sendMail);
router.post("/updatepassword",authController.updatepassword);
router.post("/userProfile",authController.userProfile)
router.post("/socialMedia",authController.socialMedia)

module.exports = router;
