const  express = require  ("express");

const app = express();

app.get("/test" , (req, res) => {
    res.send("hello, how are you?")
})

app.get("/test/subjects" , (req, res) => {
    res.send(["maths","science","IT"]);
})

const add = (a,b)=> {
    return a+b;
}

module.exports = (add);


app.listen(8081, () => console.log("listening on port 8080"))