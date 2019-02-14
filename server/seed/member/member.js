var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var memberSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    address: String,
    city: String,
    zipcode: String,
    State: String,
    phone: String,
    email: String,
    agent_id: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Member", memberSchema);
