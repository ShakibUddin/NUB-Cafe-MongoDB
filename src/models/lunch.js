const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lunchSchema = new Schema({
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
},{ collection : 'lunch' });

const lunchModel = mongoose.model('lunch',lunchSchema);

module.exports = lunchModel;