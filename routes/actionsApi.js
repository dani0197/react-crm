const router = require('express').Router();
const Client = require('../models/clientModel');

router.get('/actions', function(req, res) {
    Client.find({}).exec(function(err, data) {
        if (err) {
            console.error(err);
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

router.post('/actions/:name', function(req, res) {
    let newOwner = req.body.newOwner
    Client.findOneAndUpdate(newOwner, {
        $set: {
            owner: newOwner
        }
    }, {new: true}, function(err, owner) {
        if (err) return handleError(err);
        res.send(owner)
    })
})



module.exports = router;