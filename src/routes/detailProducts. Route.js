const express = require("express");
const router = express.Router();
const { getDetailProducts } = require("../controllers/detailProduct.controller");

router.get("/:id", getDetailProducts);

module.exports = router;