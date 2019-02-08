import * as express from "express";
import AdminController from "../controllers/admin_controller";
import Admin from "../models/admin_model";

let Adminroutes = express.Router();

Adminroutes.post("/new_admin", (req, res, next) => {
  AdminController.create(req, res, next);
});

Adminroutes.put("/admin/:id", (req, res, next) => {
  AdminController.update(req, res, next);
});

Adminroutes.delete("/admin", (req, res, next) => {
  AdminController.delete(req, res, next);
});

export default Adminroutes;
