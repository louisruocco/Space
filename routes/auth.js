const express = require("express");
const session = require("express-session");
const users = require("../db/users");
const path = require("path");
const bcrypt = require("bcrypt");
const router = express.Router();

const redirectLanding = (req, res, next) => {
    if(!req.session.userId){
        return res.redirect("/");
    } else {
        next();
    }
}

router.post("/space/journal", redirectLanding, (req, res) => {
    console.log("journal post route working");
})

module.exports = router;