const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const {config} = require("./config/index");

const app = express();
app.use(bodyParser.json());

app.post("/api/auth/token",(req,res)=>{
    const {email,username,name} = req.body;
    console.log(email)
    console.log(username)
    console.log(name)
    const token = jwt.sign({
        sub : username, email, name
    },config.authJwtSecret);
    res.json({
        access_token : token
    })
})

const server = app.listen(5000,ok=>console.log("Listening 5000"));