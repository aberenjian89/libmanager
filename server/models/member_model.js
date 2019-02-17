import mongoose from "mongoose";

const Schema = mongoose.Schema;

let memberSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    address: String,
    city: String,
    zipcode: String,
    State: String,
    phone: String,
    email: String,
    agent_id: Number
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Member", memberSchema);
