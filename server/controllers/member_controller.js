import Member from "../models/member_model";

export default class MemberController {
  create(req, res, next) {
    let memeber = new Member({
      first_name: req.params.first_name,
      last_name: req.params.last_name,
      address: req.params.address,
      city: req.params.city,
      zipcode: req.params.zipcode,
      state: req.params.state,
      phone: req.params.phone
    });
    memeber.save((err, result) => {
      if (err) {
        return res.status(500).json({
          message: err
        });
      } else {
        res.statusCode = 200;
        return res.status(200).json(result);
      }
    });
  }

  getmember(req, res, next) {
    Member.find({}, "first_name last_name email", (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err
        });
      }
      return res.status(200).json({
        result: result
      });
    });
  }
}
