const { Schema, model } = require('mongoose')

const schema = new Schema({
  name:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required:true
  },
  refreshToken:{
    type:String,
    default:''
  }
})

module.exports = model('users', schema)