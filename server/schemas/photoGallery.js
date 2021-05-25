const  mongoose = require('mongoose')






const photoSchema = new mongoose.Schema({
    image:String,
    username: String,

})

Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo