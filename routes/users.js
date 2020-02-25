var express = require('express');
var router = express.Router();
const db  = require('../models')

router.get('/test' , (req,res)=>{
  res.send('hello')
})

/* GET users listing. */
router.get('/' , (req,res)=>{
  db.user.find()
  .then((data) => res.json(data))
  .catch((err)=> res.json(err))
})

// POST - create 
router.post('/',(req,res)=>{
db.user.create(req.body)
.then((data) => res.json(data))
.catch((err)=> res.json(err))
})

module.exports = router;
