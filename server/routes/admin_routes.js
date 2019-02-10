import * as express from "express";
import AdminController from "../controllers/admin_controller";
import authenticate from '../middlewares/auth_middleware'

let Adminroutes = express.Router();

Adminroutes.post("/new_admin",authenticate,(req, res, next) => {
  AdminController.create(req, res, next);
});

Adminroutes.put("/admin/:id",authenticate,(req, res, next) => {
  AdminController.update(req, res, next);
});

Adminroutes.delete("/admin",authenticate,(req, res, next) => {
  AdminController.delete(req, res, next);
});

export default Adminroutes;
