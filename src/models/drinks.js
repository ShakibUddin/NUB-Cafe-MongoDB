const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drinksSchema = new Schema({
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
},{ collection : 'drinks' });

const drinksModel = mongoose.model('drinks',drinksSchema);

module.exports = drinksModel;