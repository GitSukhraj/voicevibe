const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.status(500).send("hello world!");
});

app.listen(port, () => {
    console.log("app is running");
});