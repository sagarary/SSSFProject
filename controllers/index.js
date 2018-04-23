const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/login', (req,res)=>{
res.render('login');
})

module.exports = router;
