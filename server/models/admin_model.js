import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { nextTick } from "q";

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

let Admin = mongoose.model("Admin", adminSchema);

export default Admin;
