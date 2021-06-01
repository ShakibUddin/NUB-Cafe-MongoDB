const Breakfast = require('../models/breakfast');

exports.getAllBreakfastItems = (req, res) => {
    Breakfast.find()
        .then(breakfasts => {
            res.json(breakfasts);
        })
        .catch(e => {
            console.log(e);
        })
}