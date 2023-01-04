const express = require("express");
const app = express();
const port = 6000

app.get("/", (res,req) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log("app is listening to port ${port}");
})