const Breakfast = require('../models/breakfast');
const Lunch = require('../models/lunch');
const Dinner = require('../models/dinner');
const Snack = require('../models/snack');
const mongoose = require('mongoose');

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

exports.insertItem = (req, res) => {
    let ItemModel = getModel(JSON.parse(req.body.data).category);

    let { name, price, description, image } = JSON.parse(req.body.data);
    let item = new ItemModel({
        name,
        price,
        description,
        image
    });

    let imageFile = req.files.image;

    if (imageFile) {
        let imageName = imageFile.name;
        let imageSize = imageFile.size;

        if (imageSize / 1024 <= 1024) {
            imageFile.mv("./public/images/" + imageName, (err) => {
                if (err) {
                    res.send(err);
                }
                item.save((error) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        res.json({
                            "message": "true",
                            "response": "Item added successfully",
                        });
                    }
                });
            })
        }
        else {
            res.json({
                "message": "false",
                "response": "Max image size 1024 kb.",
            });
        }
    }
}

function getModel(category){
    if (category === "breakfast") return Breakfast;
    if (category === "lunch") return Lunch;
    if (category === "dinner") return Dinner;
    if (category === "snacks") return Snack;
}