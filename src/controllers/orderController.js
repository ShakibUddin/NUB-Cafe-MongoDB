const Order = require('../models/order');

exports.placeOrder = (req, res) => {
    if (req.body !== undefined) {
        let { name, mobile, city, road, house, order } = req.body;
        let userOrder = new Order({
            name, mobile, city, road, house, "order":JSON.stringify(order)
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