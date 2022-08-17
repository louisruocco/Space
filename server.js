const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const ejs = require("ejs");
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Listening at ${port}`));

dotenv.config({path: "./.env"});

const sessionStore = new MongoDBStore({
    uri: process.env.DB_URI, 
    collection: process.env.DB_SESS_COLLECTION
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.use("/css", express.static("./public/css"));
app.use("/js", express.static("./public/js"));
app.set("view engine", "ejs");
app.use(flash());
app.use(session({
    name: process.env.SESS_NAME, 
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: false,
    store: sessionStore, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 3
    }
}))