const express = require("express");
const router = express.Router();
const { getLogin } = require("../controllers/login.controller");

router.get("/login", getLogin);

module.exports = router;