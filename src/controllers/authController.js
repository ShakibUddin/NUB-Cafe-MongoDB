const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    if (req.body !== undefined) {
        let { name, email, password, mobile } = req.body;
        let user = new User({
            name,
            email,
            password,
            mobile
        });
        User.findOne({ name: name }, (error, response) => {
            //console.log(`name response ${response}`);
            if (response) {
                res.json({
                    "message": "false",
                    "response": `${name} already exists`,
                });
            }
            else {
                User.findOne({ email: email }, (error, response) => {
                    //console.log(`email response ${response}`);
                    if (response) {
                        res.json({
                            "message": "false",
                            "response": `${email} already exists`,
                        });
                    }
                    else {
                        User.findOne({ mobile: mobile }, (error, response) => {
                            //console.log(`mobile response ${response}`);
                            if (response) {
                                res.json({
                                    "message": "false",
                                    "response": `${mobile} already exists`,
                                });
                            }
                            else {
                                bcrypt.genSalt(10, (err, salt) => {
                                    bcrypt.hash(user.password, salt, (err, hash) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        user.password = hash;
                                        user.save((error) => {
                                            if (error) {
                                                console.log(error);
                                            }
                                            else {
                                                //console.log(req.body);
                                                res.json({
                                                    "message": "true",
                                                    "response": "welcome",
                                                });
                                            }
                                        });
                                    })
                                })
                            }
                        })
                    }
                })
            }
        });

    }
    else {
        res.json({
            "response": false,
        });
    }
}
exports.signin = (req, res) => {
    if (req.body !== undefined) {
        let { email, password } = req.body;
        User.findOne({ email: email }, (error, userFoundResponse) => {
            if (userFoundResponse) {
                bcrypt.compare(password, userFoundResponse.password, function (err, compareResponse) {
                    if (err) {
                        // handle error
                        console.log(`error: ${error}`);
                    }
                    if (compareResponse) {
                        // Send JWT
                        if(email === "admin@gmail.com"){
                            res.json({ "response": true,"status": "ADMIN"});
                        }
                        else{
                            res.json({ "response": true,"status": "MEMBER"});
                        }

                    } else {
                        // response is OutgoingMessage object that server response http request
                        res.json({ "response": false });
                    }
                });
            }
            else {
                res.json({
                    "response": false
                });
            }
        })

    }
    else {
        res.json({
            "response": false,
        });
    }
}