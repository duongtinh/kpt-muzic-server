const User = require('../models/user.model.js');

// Create and Save a new document
exports.login = (req, res) => {
    User.find({ "email": req.body.email })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found  +++ " + req.body.email
                });
            }
            if (req.body.email !== user[0].email) {
                return res.status(400).send({
                    message: "User email incorrect"
                });
            }

            if (req.body.passWord !== user[0].passWord) {
                return res.status(400).send({
                    message: "User passWord incorrect"
                });
            }
            let code = "123456789";
            res.status(200).send(code);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.body.email
                });
            }
            return res.status(500).send({
                message: err
            });
        });
};
