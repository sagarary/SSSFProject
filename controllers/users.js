
const express = require('express')
,router = express.Router()
,User = require('../models/users');

router.get('/', (req,res) => {
    res.send ('asked for user');
})
router.get('/:id', (req,res) => {
    res.send(`asked for user ${req.params.id}`)
})
router.post('/', (req,res) => {
    res.send('created new user')
})
router.post('/:id', (req,res) => {
    res.send(`updated for user ${req.params.id}`)
})
router.delete('/:id', (req,res) => {
    res.send(`deleted for user ${req.params.id}`)
})
module.exports = router;
