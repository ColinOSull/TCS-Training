//console.log("hello world");

const http = require('http');

function greet(req,resp){
    resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify({
        "name":"colin",
        "Empid":"001",

        "address":{
            "street":"xyz street",
            "city": "bangladore",
            "state": "kartanke"
        }
    }))
       resp.end();
       } 
http.createServer(greet).listen(5000);
