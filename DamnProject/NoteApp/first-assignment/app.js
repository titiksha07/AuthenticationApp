const express = require('express');
const routes = require('./routes');
const server = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Note = require('./models/Note');
var url = 'mongodb://localhost:27017/Noteserver';
const port = 3032;

//server.use(routes);

mongoose.connect(url,(err,res)=>{
    if(err){
        console.log('Error Connecting to Database');

    }
    else {
        console.log('Connected to server');
    }
});

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(routes);
server.listen(port,function(){
    console.log(`Server listening to ${port}`);

});