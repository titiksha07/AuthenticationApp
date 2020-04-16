const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = new Schema({
    email: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required : true
    }
});

var User = mongoose.model('User',UserModel);
 
module.exports = User;