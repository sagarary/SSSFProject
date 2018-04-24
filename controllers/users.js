const express = require('express'),
    router = express.Router(),
    User = require('../models/users');

router.get('/', (req, res) => {
    res.render('user');
})
router.get('/list', (req, res) => {
    User.find().then((err, users) => {
        err ? res.send(err) : res.send(users);
    })
})
router.get('/userID/:id', (req, res) => {
    console.log(req.params.id)
    User.findOne({
        '_id': req.params.id
    }, (err, user) => {
        err ? res.send(err) : res.send(user);
    })
})
router.get('/user/:name', (req, res) => {
    const reg = new RegExp(req.params.name, 'i');
    User.find({
        '$or': [{
                'username': reg
            },
            {
                firstName: reg
            },
            {
                lastName: reg
            }
        ]
    }).then((err, users) => {
        err ? res.send(err) : res.send(users);
    })
})
router.post('/', (req, res) => {
    req.body.lastLogin = Date.now();
    User.create(req.body).then((err, user) => {
        err ? res.send(err) : res.send(user);
    })
})
router.post('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, user) => {
        err ? res.send(err) : res.send(user);
    })
})
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        const msg = {
            message: 'Deleted',
            id: user.id
        }
        err ? res.send(err) : res.send(msg);
    })
})
module.exports = router;