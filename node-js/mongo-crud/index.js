const express = require("express")
const employeeRouter = require("./routes/employees")
require("dotenv").config();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express();

app.use(employeeRouter);
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("CONNECTED")
})

app.listen(5000, () => {
    console.log("server is starting");
})