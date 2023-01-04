const express = require("express")
const courseRouter = require("./routes/courses")
require("dotenv").config();
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const app = express();

app.use(courseRouter);
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("Connected to the db successfully")
})

app.listen(5000, () => {
    console.log("server is starting ");
})