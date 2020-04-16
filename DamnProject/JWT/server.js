const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./model/user');
const port = 3031;
const app = express();
const routes = require('./routes/routes');
var url = 'mongodb://localhost:27017/JwtToken';
mongoose.connect(url, (err,res)=>{
if(err){
    console.log('Error connecting to database');
}
else {
    console.log('Connected to server');
}
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);
app.listen(port,function(){
    console.log(`Server listening to ${port}`);
});