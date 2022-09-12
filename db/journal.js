const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({path: "./.env"});

const db = mongoose.connect(process.env.DB_URI, () => console.log("Journal Schema Connected..."));

const journalSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    date: String,
    time: String,
    location: String,
    entry: String,
});

const entries = mongoose.model("entries", journalSchema);
module.exports = entries;