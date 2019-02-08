import express from 'express'
import SessionController from '../controllers/session_controller'

let Sessionroutes = express.Router()


Sessionroutes.post("/new_session",(req,res,next)=>{
  SessionController.create(req,res,next)
})


export default Sessionroutes
