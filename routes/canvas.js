const express = require('express')
const router = express.Router()
const db  = require('../models')
// GET - All the canvas
router.get('/' , (req,res)=>{
        db.canvas.find()
        .then((data) => res.json(data))
        .catch((err)=> res.json(err))
})

// POST - create 
router.post('/',(req,res)=>{
   
    db.canvas.create(req.body)
    .then((data) => res.json(data))
    .catch((err)=> res.json(err))
})

// get a single canvas out 
// get the current user canvas 
// u will not have access to canvas id ?
// then u have userd id => loggedin => req.user.id
router.get('/:id' ,(req,res)=>{
    
    db.canvas.findOne({ username : req.params.id})
    .populate('username', ['name'])
    .then((data) => res.json(data))
    .catch((err)=> res.json(err))
})

// delete => ccnvas
router.delete('/:id' ,(req,res)=>{
    db.canvas.findOneAndRemove({_id : req.params.id})
    .then(()=> res.send("canvas deleted"))
    .catch((err)=> res.send(err))
})

// update the canvas details 
router.put('/:id' , (req,res)=>{
    db.canvas.findOneAndUpdate({_id : req.params.id}, req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))

})


module.exports = router 