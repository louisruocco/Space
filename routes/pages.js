const express = require("express");
const session = require("express-session");
const users = require("../db/users");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("React under construction");
})

module.exports = router;