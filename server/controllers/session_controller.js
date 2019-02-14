import Admin from "../models/admin_model";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default class SessionController {
  static create(req, res, next) {
    let current_user = null;
    Admin.findOne({ email: req.body.email }, (err, user) => {
      current_user = user;
      if (err) {
        return next(err);
      } else if (user == null) {
        return res.status(401).json({
          message: "Authentication Failed"
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (!err && result) {
          const token = jwt.sign(
            { email: user.email, userId: current_user._id },
            process.env.Super_Secret,
            { expiresIn: "1hr" }
          );
          current_user.auth_token = token;
          user.save((err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json({
                message: err
              });
            } else {
              return res.status(201).json({
                messge: "Authenticated",
                auth_token: token,
                current_user: {
                  _id: current_user._id,
                  first_name: current_user.first_name,
                  last_name: current_user.last_name,
                  email: current_user.email
                },
                expiresIn: 3600
              });
            }
          });
        } else {
          return res.status(401).json({
            message: "Authentication Failed"
          });
        }
      });
    });
  }

  static destroy(req, res, next) {
    Admin.findOne({ _id: req.query.id }, (err, result) => {
      if (err) {
        res.status(500).json({
          message: err
        });
      }
      result.auth_token = null;
      result.save((err, result) => {
        if (err) {
          res.status(500).json({
            message: err
          });
        }
        res.status(200).json({
          message: "Successfully Logout"
        });
      });
    });
  }

  static verifytoken(req, res, next) {
    try {
      jwt.verify(req.query.token, process.env.Super_Secret);
      Admin.findOne({ auth_token: req.query.token }, (err, result) => {
        if (err) {
          return res.status(500);
        }
        if (result) {
          return res.status(201).json({
            message: "Authenticated",
            current_user: {
              _id: result._id,
              first_name: result.first_name,
              last_name: result.last_name,
              email: result.email
            }
          });
        } else {
          return res.status(500);
        }
      });
    } catch (ex) {
      return res.status(401).json({
        message: "Not Authroized"
      });
    }
  }
}
