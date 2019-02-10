import express from 'express'
import {MemberController} from  '../controllers/member_controller'
import authenticate from '../middlewares/auth_middleware'

let router = express.Router()



router.post('/new_member',authenticate,(req,res,next)=>{
  MemberController.create(req,res,next)
})

router.get('/members',authenticate,(req,res,next)=>{

})
