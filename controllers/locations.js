
const express = require('express')
,router = express.Router()
,Location = require('../models/locations');

router.get('/', (req,res) => {
    res.send ('asked for locations');
})
router.get('/:id', (req,res) => {
    res.send(`asked for locations ${req.params.id}`)
})
router.post('/', (req,res) => {
    res.send('created new locations')
})
router.post('/:id', (req,res) => {
    res.send(`updated for locations ${req.params.id}`)
})
router.delete('/:id', (req,res) => {
    res.send(`deleted for locations ${req.params.id}`)
})
module.exports = router;
