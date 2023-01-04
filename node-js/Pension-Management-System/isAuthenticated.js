const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secret = 'secret';

module.exports = async function (req,res,next) {
    //console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    console.log(token);

    
    //jwt.verify(token, pass, (err, decoded) => { async callback } );
    jwt.sign(token, secret, (err,user) => {
        
        if(err) {
            
                
                console.log(err);
                console.log('not working');

                req.authenticated=false;
            
             }
        
        else {
            req.user = user;
            next();
        }
    });
}