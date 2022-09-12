const express = require("express");
const session = require("express-session");
const users = require("../db/users");
const path = require("path");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/space/journal", (req, res) => {
    console.log("journal post route working");
})

module.exports = router;