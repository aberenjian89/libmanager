import express from "express";
import MemberController from "../controllers/member_controller";
import authenticate from "../middlewares/auth_middleware";

let Memberroutes = express.Router();

let member_controller = new MemberController();

Memberroutes.post("/new_member", authenticate, (req, res, next) => {
  member_controller.create(req, res, next);
});

Memberroutes.get("/members", authenticate, (req, res, next) => {
  member_controller.getmember(req, res, next);
});

export default Memberroutes;
