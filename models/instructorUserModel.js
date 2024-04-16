const mongoose = require('mongoose')

const instructorSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const instructorModel = mongoose.model('instructor', instructorSchema) //basis of schema we created model
module.exports = instructorModel
