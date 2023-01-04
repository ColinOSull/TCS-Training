const express = require("express");
///const express = require("dotenv").config;
const  app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Pensioner = require("./pensioner")
const isAuthenticated = require("../isAuthenticated")
const cors = require("cors");

app.use(express.json());
app.use(cors());
var channel, connection;

mongoose.connect("mongodb://localhost:27017/pensioner-service",{
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    },
    () => {
        console.log("pensioner service db connected")
    }
);

async function connect (){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PENSIONER")
}


connect();

app.post("/pensioner/create",  async (req,res) => {

    const{name, date_of_birth, pan, aadhaar, salary_earned, allowences, self_family_pension, bank_detail} = req.body;
    const newPensioner = new Pensioner({
        name,
        date_of_birth, 
        pan,
        aadhaar,
        salary_earned, 
        allowences, 
        self_family_pension, 
        bank_detail, 
    });

    newPensioner.save();
    return res.json(newPensioner);
})


app.get("/pensioner/getall",isAuthenticated,  async (req,res) => {
    try {
        const pensioners = await Pensioner.find();
        res.json(pensioners);
    } catch (err) {
        res.json(err);
    }
});

app.get("/pensioner/getby/:aadhaar",isAuthenticated, async (req,res) => 
{
    try {
        const pensioners = await Pensioner.find({aadhaar: req.params.aadhaar},req.body);
        res.json(pensioners);

    }catch (error) {
        res.send(error);
    }
});

app.delete("/pensioner/delete/:aadhaar", isAuthenticated, async (req,res) => 
{
    try {
        const pensioners = await Pensioner.remove({aadhaar: req.params.aadhaar});
        res.status(200).json({
            message: "deleted successfully",
        });
    }catch (error) {
        res.send(error);
    }
});

app.put("/pensioner/update/:aadhaar", isAuthenticated, async (req,res) => {
    const aadhaar = req.params.aadhaar;

    try {
        const pension = await Pensioner.updateOne({ aadhaar:
        aadhaar}, req.body);
        res.json(pension);
    }catch (error){
        res.json(error);
    }
});

app.post("/pensioner/process/:aadhaar", isAuthenticated, async (req, res) => {
    const  {aadhaar} = req.params;
    const pensioners = await Pensioner.find({ aadhaar:aadhaar}, {'_id':0}, req.body);
    channel.sendToQueue(
        "PROCESS",
        Buffer.from(
            JSON.stringify({
                pensioners,
                aadhaar: req.user.aadhaar,
            })
        )
    );
    channel.consume("PENSIONER", data => {
        console.log("consuming pensioner queue");
            pension = JSON.parse(data.content);
            channel.ack(data);
    })
    //return res.json(pensioners);
});


app.listen(PORT, () => {
    console.log("pensioner detail service is working at port 5001");
})