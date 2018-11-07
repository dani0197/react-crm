const router = require('express').Router();
const Client = require('../models/clientModel');

router.get('/clients', function (req, res) {
    Client.find({}).exec(function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

router.post('/clients', function (req, res) {
    let id = req.body._id
    let newName = req.body.name
    let newCountry = req.body.country
    Client.findByIdAndUpdate(id, {
        $set: {
            name: newName,
            country: newCountry
        }
    }, { new: true }, function (err, client) {
        if (err) return handleError(err);
        res.send(client);
    });
})

module.exports = router;