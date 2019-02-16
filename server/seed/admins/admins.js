var _mongoose = require("mongoose");

var _bcrypt = require("bcrypt");

var adminSchema = new _mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: String,
  auth_token: String
});

adminSchema.pre("save", function (next) {
  var _this = this;

  _bcrypt.hash(this.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    _this.password = hash;
    next();
  });
});

var Admin = _mongoose.model("Admin", adminSchema);

exports.default = Admin;
