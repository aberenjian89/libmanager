import mongoose from 'mongoose'


const Schema = mongoose.Schema;

let memberSchema = new Schema({
  first_name: String,
  last_name: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    country: String,
  },
  phone: String,
  agent_id: Number,
},{
  timestamps: true
})

export default mongoose.model('Member',memberSchema)

