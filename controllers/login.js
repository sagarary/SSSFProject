const express = require('express'),
router = express.Router(),
crypto = require('crypto-js'),
bcrypt = require('bcrypt')
SALT_FACTOR=10,
User = require('../models/users');

router.post('/', (req, res) => {
  User.findOne({
    'username' : req.body.username
  }).then(function(user, err) {
  if (!user){
    res.send("no user found")
  } else{
    console.log(user.password)
    const allow = bcrypt.compareSync(req.body.password, user.password)
    allow ? res.redirect('/') : res.redirect('/login')
  }
})
})

module.exports = router;
