const express = require("express");
const session = require("express-session");
const users = require("../db/users");
const entries = require("../db/journal");
const bcrypt = require("bcrypt");
const router = express.Router();

const redirectLanding = (req, res, next) => {
    if(!req.session.userId){
        return res.redirect("/");
    } else {
        next();
    }
}

router.post("/space/journal", async (req, res) => {
    const {date, location, entry} = req.body;
    const dateCheck = await entries.find({date: date});
    if(dateCheck.length > 0){
        return res.send("Entry for This date already exists, please Amend or delete existing entry");
    } else {
        await entries.create({
            userId: req.session.userId,
            date: `Journal Entry - ${date}`,
            location: location,
            entry: entry
        })
    }

    console.log("Entry Added!");
})

module.exports = router;