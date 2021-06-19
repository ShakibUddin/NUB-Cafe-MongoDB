const Rice = require('../models/rice');
const Curry = require('../models/curry');
const Drinks = require('../models/drinks');
const Dissert = require('../models/dissert');
const mongoose = require('mongoose');

exports.getAllRiceItems = (req, res) => {
    Rice.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getAllCurryItems = (req, res) => {
    Curry.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getAllDrinksItems = (req, res) => {
    Drinks.find()
        .then(items => {
            res.json(items);
        })
        .catch(e => {
            console.log(e);
        })
}

exports.getAllDissertItems = (req, res) => {
    Dissert.find()
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
    if (category === "rice") return Rice;
    if (category === "curry") return Curry;
    if (category === "drinks") return Drinks;
    if (category === "dissert") return Dissert;
}