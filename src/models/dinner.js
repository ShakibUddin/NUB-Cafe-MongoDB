const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dinnerSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},{ collection : 'dinner' });

const dinnerModel = mongoose.model('dinner',dinnerSchema);

module.exports = dinnerModel;