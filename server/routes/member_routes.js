import express from 'express'
import MemberController from  '../controllers/member_controller'
import authenticate from '../middlewares/auth_middleware'

let Memberroutes = express.Router()



Memberroutes.post('/new_member',authenticate,(req,res,next)=>{
  MemberController.create(req,res,next)
})

Memberroutes.get('/members',authenticate,(req,res,next)=>{

})


export default Memberroutes
