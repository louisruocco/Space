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

router.post("/space/journal", redirectLanding, async (req, res) => {
    const {title, date, time, location, entry} = req.body;
    const dateCheck = await entries.find({title: title});
    console.log(dateCheck);
    if(dateCheck.length > 0){
        return res.send("Entry for This date already exists, please Amend or delete existing entry");
    } else {
        await entries.create({
            userId: 1,
            title: title,
            date: date,
            time: time,
            location: location,
            entry: entry
        })
    }

    res.redirect("back");
})

module.exports = router;