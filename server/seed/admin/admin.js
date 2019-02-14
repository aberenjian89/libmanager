const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let adminSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: String,
  auth_token: String
});

adminSchema.pre("save", function(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model("Admin", adminSchema);
