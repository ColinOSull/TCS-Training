const express = require("express");
///const express = require("dotenv").config;

const  app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Product = require("./product")
const isAuthenticated = require("../isAuthenticated")
app.use(express.json());
var channel, connection;

mongoose.connect("mongodb://localhost:27017/product-service",{
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    },
    () => {
        console.log("product service db connected")
    }
);

async function connect (){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PRODUCT")
}


connect();

app.post("/product/create", isAuthenticated, async (req,res) => {
    const{name, description, price} = req.body;
    const newProduct = new Product({
        name,
        description,
        price
    });
    newProduct.save();
    return res.json(newProduct);
})

app.post("/product/buy", isAuthenticated, async (req, res) => {
    const  {ids} = req.body;
    const products = await Product.find({_id:{ $in: ids}});

    channel.sendToQueue(
        "ORDER",
        Buffer.from(
            JSON.stringify({
                products,
                userEmail: req.user.email,
            })
        )
    );
    channel.consume("PRODUCT", data => {
        console.log("consuming product queue");
            order = JSON.parse(data.content);
            channel.ack(data);
    })
    return res.json(order);
});


app.listen(PORT, () => {
    console.log("product service is working at port 5001");
})