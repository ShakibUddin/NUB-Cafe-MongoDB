const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    road:{
        type:String,
        required:true,
    },
    house:{
        type:String,
        required:true,
    },
    order:{
        type:String,
        required:true,
    },
},{ collection : 'orders' });

const orderModel = mongoose.model('orders',orderSchema);

module.exports = orderModel;