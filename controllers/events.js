
const express = require('express')
,router = express.Router()
,Event = require('../models/events');

router.get('/', (req,res) => {
    Event.find().then((err,events) => {
        err ? res.send(err) : res.send(events);
    })
})
router.get('/:id', (req,res) => {
    Event.findOne({
        '_id': req.params.id
    }, (err, event) => {
        err ? res.send(err) : res.send(event);
    })
})
router.get('/location/:id', (req,res) => {
    Event.find({
        'location': req.params.id
    }, (err, events) => {
        err ? res.send(err) : res.send(events);
    })
})
router.get('/name/:name', (req,res) => {
    const reg = new RegExp(req.params.name, 'i');
    Event.find({
        'name': reg
    }, (err, events) => {
        err ? res.send(err) : res.send(events);
    })
})
router.get('/organiser/:id', (req,res) => {
    Event.find({
        'organiser': req.params.id
    }, (err, events) => {
        err ? res.send(err) : res.send(events);
    })
})

router.post('/', (req,res) => {
    req.body.date  = new Date(req.body.date);
    console.log(req.body.date);
    Event.create(req.body).then((err,event)=>{
        err ? res.send(err) : res.send(event)
    })
})
router.post('/:id', (req,res) => {
    Event.create(req.body).then((err, event) => {
        err ? res.send(err) : res.send(event);
    })})
router.delete('/:id', (req,res) => {
    Event.findByIdAndRemove(req.params.id, (err, event) => {
        const msg = {
            message: 'Deleted',
            id: event.id
        }
        err ? res.send(err) : res.send(msg);
    })})
module.exports = router;
