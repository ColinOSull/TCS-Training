const express = require("express");
const app = express();
const amqp = require("amqplib");
var channel, connection;
async function connect() {
    try {
        const amqpServer = "amqp://localhost:5672";
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("Rabbit");
    }   catch (err) {
        console.log(err);
    }
}
connect();
app.get("/send",async (req,res) => {
    const fakeData = {
        name:"colin",
        company:"tcs",
    };
    await channel.sendToQueue("Rabbit", Buffer.from(JSON.stringify(fakeData)));
    await channel.close();
    await connection.close();
    return res.send("done")
});
app.listen(5001, () => {
    console.log("server is running on port 5001");
})