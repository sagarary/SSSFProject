
const express = require('express')
,router = express.Router()
,Review = require('../models/reviews');

router.get('/', (req,res) => {
    res.send ('asked for reviews');
})
router.get('/:id', (req,res) => {
    res.send(`asked for reviews ${req.params.id}`)
})
router.post('/', (req,res) => {
    res.send('created new reviews')
})
router.post('/:id', (req,res) => {
    res.send(`updated for reviews ${req.params.id}`)
})
router.delete('/:id', (req,res) => {
    res.send(`deleted for reviews ${req.params.id}`)
})
module.exports = router;
