import Memebr from '../models/member_model'


export default class MemberController {
  static create(req,res,next){
    let memeber = new Memebr({
      first_name: req.params.first_name,
      last_name: req.params.last_name,
      address: req.params.address,
      city: req.params.city,
      zipcode: req.params.zipcode,
      state: req.params.state,
      phone: req.params.phone
    })
    memeber.save((err,result)=>{
      if (err){
        return res.status(500).json({
          message: err
        })
      }else{
        res.statusCode = 200
        return res.status(200).json(result)
      }
    })
  }
}
