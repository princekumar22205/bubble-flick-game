const express = require("express");
const router = express.Router();
const {userRegister, userLogin, userCurrent} = require("../controller/register");
const validateToken = require("../middleware/validateToken");

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/current",validateToken,userCurrent);

module.exports = router;