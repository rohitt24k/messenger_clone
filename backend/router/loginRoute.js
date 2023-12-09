const express = require("express");
const { signup, signin } = require("../controllers/loginControllers");

const router = express.Router();

router.get("/signin", signin);

router.get("/signup", signup);

module.exports = router;
