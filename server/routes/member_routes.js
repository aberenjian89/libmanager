import express from 'express'
import {MemberController} from  '../controllers/member_controller'

let router = express.Router()



router.post('/new_member',(req,res,next)=>{
  MemberController.create(req,res,next)
})
