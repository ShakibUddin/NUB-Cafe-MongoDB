const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');
const Snack = require('../models/snack');

exports.getAllBreakfastItems = (req, res) => {
    Breakfast.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getAllLunchItems = (req, res) => {
    Lunch.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getAllDinnerItems = (req, res) => {
    Dinner.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getAllSnackItems = (req, res) => {
    Snack.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}