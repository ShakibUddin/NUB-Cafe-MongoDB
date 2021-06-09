const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    orders:{
        type:Array,
        required:true,
    },
},{ collection : 'user' });

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;