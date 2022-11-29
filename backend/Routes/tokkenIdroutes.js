const express = require("express");
const router = express.Router();
const tokencontroler = require("../controllers/TokenController");

router.get("/balance", tokencontroler.getBalance);
router.get("/:id", tokencontroler.getdata);

module.exports = router;
