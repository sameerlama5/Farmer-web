const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {type:String, unique:true}, 
  phoneNumber: Number,
  password: String,
  role: {
    type: String,
    enum : ['Customer','Vendor'],
    default: 'Customer',
  },
  isVerified: Boolean,
  fullName:String,
  address: String,
},{
  timestamps:true
});
const User = mongoose.model('User', userSchema);
module.exports = User