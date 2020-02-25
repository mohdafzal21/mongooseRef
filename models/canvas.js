const mongoose = require('mongoose')
const Schema = mongoose.Schema

const canvasSchema = new Schema({
    canvasName : String, 
    bio : String,
    coins : String,
    username :{
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
    badges : [{
        type : String
    }]
})

const canvas = mongoose.model('canvas' , canvasSchema)
module.exports = canvas