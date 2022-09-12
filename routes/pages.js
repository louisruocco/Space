const express = require("express");
const session = require("express-session");
const users = require("../db/users");
const entries = require("../db/journal");
const path = require("path");
const router = express.Router();

const redirectLanding = (req, res, next) => {
    if(!req.session.userId){
        return res.redirect("/");
    } else {
        next();
    }
}

router.get("/", (req, res) => {
    const {userId} = req.session;
    res.send("React page under construction");
});

router.get("/space/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/static", "register.html"));
});

router.get("/space/journal", async (req, res) => {
    const getEntries = await entries.find({})
    res.render("journal", {getEntries});
});

module.exports = router;