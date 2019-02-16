var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var memberSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    address: String,
    city: String,
    zipcode: String,
    state: String,
    phone: String,
    email: String,
    agent_id: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Member", memberSchema);
