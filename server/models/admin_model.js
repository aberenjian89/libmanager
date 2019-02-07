import mongoose from 'mongoose'


let adminSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: String,
  auth_token: String
})


export default mongoose.model('Admin',adminSchema)
