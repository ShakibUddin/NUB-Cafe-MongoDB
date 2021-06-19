const User = require('../models/user');

exports.getProfileData = (req,res) => {
    if (req.body !== undefined) {
        let { email } = req.body;
        User.find({ email: email }, (error, userData) => {
            if (error) res.json({ "response": false });
            //console.log({ "response": true, "data": userData });
            res.json({ "response": true, "data": userData });
        });
    }
}