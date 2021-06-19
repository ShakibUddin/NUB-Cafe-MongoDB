const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const riceSchema = new Schema({
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
},{ collection : 'rice' });

const riceModel = mongoose.model('rice',riceSchema);

module.exports = riceModel;