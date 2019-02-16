import express from "express";
import SessionController from "../controllers/session_controller";

let Sessionroutes = express.Router();

let session_controller = new SessionController()

Sessionroutes.post("/new_session", (req, res, next) => {
  session_controller.create(req, res, next);
});

Sessionroutes.delete("/logout", (req, res, next) => {
  session_controller.destroy(req, res, next);
});

Sessionroutes.get("/validate_token", (req, res, next) => {
  session_controller.verifytoken(req, res, next);
});

export default Sessionroutes;
