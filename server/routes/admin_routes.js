import * as express from "express";
import AdminController from "../controllers/admin_controller";
import authenticate from '../middlewares/auth_middleware'

let Adminroutes = express.Router();
let admin_controller  = new AdminController()

Adminroutes.post("/new_admin",authenticate,(req, res, next) => {
  admin_controller.create(req, res, next);
});

Adminroutes.put("/admin/:id",authenticate,(req, res, next) => {
  admin_controller.update(req, res, next);
});

Adminroutes.delete("/admin",authenticate,(req, res, next) => {
  admin_controller.delete(req, res, next);
});

export default Adminroutes;
