
const express = require('express')
,router = express.Router()
,Location = require('../models/locations');

router.get('/', (req,res) => {
    Location.find().then((err,location)=>{
        err ? res.send(err) : res.send(location);
    })
})
router.get('/id/:id', (req,res) => {
    Location.findOne({
        '_id': req.params.id
    }, (err, location) => {
        err ? res.send(err) : res.send(location);
    })
})
router.get('/name/:name', (req,res) => {
    const reg = new RegExp(req.params.name, 'i');
    Location.find({
        'name': reg
    }).then((err,location)=>{
        err ? res.send(err) : res.send(location);
    })
})
router.post('/', (req,res) => {
   Location.create(req.body).then((err,location)=>{
        err ? res.send(err) : res.send(location); 
     })
})
router.post('/:id', (req,res) => {
    Location.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, location) => {
        err ? res.send(err) : res.send(location);
    })})
router.delete('/:id', (req,res) => {
    Location.findByIdAndRemove(req.params.id, (err, location) => {
        const msg = {
            message: 'Deleted',
            id: location.id
        }
        err ? res.send(err) : res.send(msg);
    })
})
module.exports = router;
