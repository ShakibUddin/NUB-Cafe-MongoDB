const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const breakfastSchema = new Schema({
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
},{ collection : 'breakfast' });

const breakfastModel = mongoose.model('breakfast',breakfastSchema);

module.exports = breakfastModel;