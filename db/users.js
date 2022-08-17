const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({path: "./.env"});

const db = mongoose.connect(process.env.DB_URI, () => console.log("Users Schema Connected..."));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const users = mongoose.model("users", userSchema);
module.exports = users;