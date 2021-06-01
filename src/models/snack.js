const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const snackSchema = new Schema({
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
},{ collection : 'snack' });

const snackModel = mongoose.model('snack',snackSchema);

module.exports = snackModel;