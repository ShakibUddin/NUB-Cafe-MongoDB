const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dissertschema = new Schema({
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
},{ collection : 'disserts' });

const dissertModel = mongoose.model('disserts',dissertschema);

module.exports = dissertModel;