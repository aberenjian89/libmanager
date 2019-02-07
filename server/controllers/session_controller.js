import Admin from '../models/admin_model'
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export default class SessionController {

    create(req,res,next){
      let current_user = null
      Admin.findOne(req.params.email,(err,user)=>{
        current_user = user
        if (err){
          return next(err)
        }else if (!user){
          return res.status(401).json({
            message : "Authentication Failed"
          })
        }
        bcrypt.compare(req.params.password,user.password,(err,result)=>{
          if (result){
            const token = jwt.sign({email: user.email, userId: current_user._id},process.env.Super_Secret, {expiresIn: '1hr'})
            current_user.auth_token = token
            user.save((err,result)=>{
              if (error){
                console.log(error)
                res.status(500).json({
                  message : error
                })
              }else{
                req.session.user = current_user
                return res.status(201).json({
                  messge: "Authenticated",
                  token: token,
                  current_user: {
                    first_name: current_user.first_name,
                    last_name: current_user.last_name,
                    email: current_user.email
                  },
                  expiresIn: 3600
                })
              }
            })
          }else{
            return res.status(401).json({
              message: "Authentication Failed"
            })
          }
        })
      })
    }

    destroy(req,res){

    }
}
