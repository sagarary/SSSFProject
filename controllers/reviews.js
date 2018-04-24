const express = require('express'),
    router = express.Router(),
    Review = require('../models/reviews'),
    Location = require('../models/locations');

router.get('/', (req, res) => {
    Review.find().then((err, review) => {
        err ? res.send(err) : res.send(review);
    })
})
router.get('/:id', (req, res) => {
    Review.findOne({
        '_id': req.params.id
    }, (err, review) => {
        err ? res.send(err) : res.send(review);
    })
})
router.get('/location/:id', (req,res) => {
    Review.find({
        'location': req.params.id
    }, (err, reviews) => {
        err ? res.send(err) : res.send(reviews);
    })
})
router.get('/reviewer/:id', (req,res) => {
    Review.find({
        'reviewer': req.params.id
    }, (err, reviews) => {
        err ? res.send(err) : res.send(reviews);
    })
})
router.post('/', (req, res) => {
    Location.findByIdAndUpdate({
        _id: req.body.location
    }, {
        $inc: {
            totalReviews: +1
        }
    }).then(() => {
        Review.create(req.body).then((err, review) => {
            err ? res.send(err) : res.send(review);
        })
    })
})
router.post('/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, review) => {
        err ? res.send(err) : res.send(review);
    })
})
router.delete('/:id', (req, res) => {
    Location.findByIdAndUpdate({
        _id: req.body.location
    }, {
        $inc: {
            totalReviews: -1
        }
    }).then(() => {
        Review.findByIdAndRemove(req.params.id, (err, review) => {
            const response = {
                message: 'Successfully deleted',
                id: review.id
            };
            err ? res.send(err) : res.send(response);
        })
    })
});

module.exports = router;