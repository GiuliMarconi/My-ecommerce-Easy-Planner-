const express = require("express");
const router = express.Router();
const { getRegister } = require("../controllers/register.controller");

router.get("register", getRegister);

module.exports = router;