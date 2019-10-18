const express = require("express");
const app = express();

// add mdb
const mongoose = require("mongoose");

// mdb config
const db = require("./config/keys").mongoURI;

// connect to mdb from mongoose
mongoose
	.connect(db)
	.then(() => console.log("mongoDB connected✅"))
	.catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 1000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
