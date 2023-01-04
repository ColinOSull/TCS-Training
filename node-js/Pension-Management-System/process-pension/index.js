const express = require("express");
///const express = require("dotenv").config;
const  app = express();
//const PORT = process.env.PORT;
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
///const Product = require("./Product")
//const isAuthenticated = require("../isAuthenticated")
const Pensioner = require("./pension")
const cors = require("cors");
var updatedPension = 0;
var bankServiceCharge = 0

app.use(express.json());
app.use(cors());


mongoose.connect(
    "mongodb://localhost:27017/process-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,   
    },
    () => {
        console.log("process service db connected")
    }
);

async function connect (){
    const amqpServer = "amqp://localhost:5672"
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PROCESS")
}

function createPension (pensioners, aadhaar){
    let newPensionAmmount = 0;
    //let bankServiceCharge = 0;
    
    //for(t=0; t<pensioners.length; ++t) {
        if(pensioners.self_family_pension=="self"){
            newPensionAmmount = ((pensioners.salary_earned + pensioners.allowences)*.8);
        }
        else if (pensioners.self_family_pension=="family"){
            newPensionAmmount=((pensioners.salary_earned + pensioners.allowences)*.5);
        }
        
        if(pensioners.public_or_private=="public") {
            bankServiceCharge = 500;
        }
        else {
            bankServiceCharge = 550;
        }
        const newPension = new Pensioner({
            pensioners,
            //user: aadhaar,
            pensionAmmount:newPensionAmmount,
            bankServiceCharge:500
        });
        updatedPension = newPensionAmmount;

        newPension.save();
        return newPension;

    }
//}
    connect().then(() => {
        channel.consume("PROCESS", data => {
            const {pensioners , pensionAmmount} = JSON.parse(data.content);
            const newPension = createPension(pensioners, pensionAmmount)
            console.log("consuming order queue")
            //console.log(newPension);;
            console.log(pensioners[0]);
            console.log("Pension ammount: " + updatedPension);
            console.log("Bank service charge: " + bankServiceCharge);


            channel.ack(data);
            channel.sendToQueue("PENSIONER", Buffer.from(JSON.stringify({newPension})));
        })
    });
    
    app.listen(5003, () => {
        console.log("process pension service is working at port 5003");
    })