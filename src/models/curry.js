const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currySchema = new Schema({
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
},{ collection : 'curry' });

const curryModel = mongoose.model('curry',currySchema);

module.exports = curryModel;