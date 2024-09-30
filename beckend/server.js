require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieparser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(500).send("hello world!");
});

app.listen(port, () => {
    console.log("app is running");
});