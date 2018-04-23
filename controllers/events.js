
const express = require('express')
,router = express.Router()
,Event = require('../models/events');

router.get('/', (req,res) => {
    res.send ('asked for events');
})
router.get('/:id', (req,res) => {
    res.send(`asked for event ${req.params.id}`)
})
router.post('/', (req,res) => {
    res.send('created new event')
})
router.post('/:id', (req,res) => {
    res.send(`updated for event ${req.params.id}`)
})
router.delete('/:id', (req,res) => {
    res.send(`deleted for event ${req.params.id}`)
})
module.exports = router;
