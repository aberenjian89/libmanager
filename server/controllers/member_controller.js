import Memebr from '../models/member_model'


export default class MemberController {
  create(req,res,next){
    let memeber = new Memebr({
      first_name: req.params.first_name,
      last_name: req.params.last_name,
      address: {
        line1: req.params.line1,
        line2: req.params.line2,
        city: req.params.city,
        country: req.params.country
      },
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
