
const mongoose = require("mongoose");

const options = {
    reconnectTries : 10,
    poolSize: 10
};

var uri ="mongodb+srv://vaibhav:1234567890@cluster0-ds4dk.mongodb.net/test?retryWrites=true";


mongoose.connect(uri,options).then(
    ()=>{
        console.log("Database connection established");
    },
    err=>{
        console.log(err);
    }
);