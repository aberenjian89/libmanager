import * as express from 'express'
import {AdminController} from  '../controllers/admin_controller'

let Adminroutes = express.Router()



Adminroutes.post('/new_admin',(req,res,next)=>{
  AdminController.create(req,res,next)
})



export default Adminroutes
