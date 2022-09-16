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

const redirectLogin = (req, res, next) => {
    if(!req.session.userId){
        return res.redirect("/space/login");
    } else {
        next();
    }
}

router.get("/", (req, res) => {
    const {userId} = req.session;
    res.sendFile(path.join(__dirname, "../hub/build", "Space.html"));
});

router.get("/space/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/static", "register.html"));
});

router.get("/space/login", (req, res) => {
    res.send("Login Here")
})

router.get("/space/journal", redirectLogin, async (req, res) => {
    const getEntries = await entries.find({})
    console.log(getEntries)
    res.render("journal", {getEntries});
});

router.get("/space/picOfDay", async (req, res) => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`);
    const data = await response.json();
    res.json(data)
});

router.get("/space/news", async (req, res) => {
    const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
    const data = await response.json();
    console.log(data);
    res.json(data);
});

router.get("/space/marsWeather", async (req, res) => {
    const response = await fetch("https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0")
    const data = await response.json();
    res.json(data);
});

router.get("/space/marsRoverPics", async(req, res) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() - 7;
    const apiDate = `${year}-${month}-${day}`

    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${apiDate}&camera=fhaz&api_key=${process.env.NASA_KEY}`);
    const data = await response.json();
    res.json(data);
})

module.exports = router;