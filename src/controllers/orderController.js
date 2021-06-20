const Order = require('../models/order');

exports.placeOrder = (req, res) => {
    if (req.body !== undefined) {
        let { name, mobile, city, road, house, order, subTotal, deliveryCharge, total } = req.body;
        let userOrder = new Order({
            name, mobile, city, road, house, "order":JSON.stringify(order), subTotal, deliveryCharge, total
        });
        userOrder.save((error) => {
            if (error) {
                console.log(error);
                res.json({
                    "message": "false",
                    "response": "Order was not placed.",
                });
            }
            else {
                res.json({
                    "message": "true",
                    "response": "Order placed successfully",
                });
            }
        });

    }
}

exports.getAllOrder = (req, res) => {
    Order.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.removeOrder = (req, res) => {
    Order.findByIdAndRemove({_id: req.params.id})
        .then(response => {
            res.json({
                "response": "true",
            });
        })
        .catch(e => {
            console.log(e);
        })
}