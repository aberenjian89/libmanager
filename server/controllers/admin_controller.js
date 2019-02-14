import Admin from "../models/admin_model";
import bcrypt from "bcrypt";

export default class AdminController {
  constructor() {}
  static create(req, res, next) {
    let new_admin = new Admin({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    bcrypt.hash(new_admin.password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
      new_admin.password = hash;
    });
    new_admin.save((err, result) => {
      if (err) {
        res.status(500).json({
          message: err.message
        });
      }
      res.status(200).json({
        admin: result
      });
    });
  }

  static update(req, res, next) {
    let admin = new Admin({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    });
    Admin.findOneAndUpdate({ _id: req.query.id }, admin, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message
        });
      }
      return res.status(200).json({
        admin: result
      });
    });
    next();
  }

  static delete(req, res, next) {
    next();
  }
}
