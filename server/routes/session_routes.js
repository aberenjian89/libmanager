import express from "express";
import SessionController from "../controllers/session_controller";

let Sessionroutes = express.Router();

Sessionroutes.post("/new_session", (req, res, next) => {
  SessionController.create(req, res, next);
});

Sessionroutes.delete("/logout", (req, res, next) => {
  SessionController.destroy(req, res, next);
});

Sessionroutes.get("/validate_token", (req, res, next) => {
  SessionController.verifytoken(req, res, next);
});

export default Sessionroutes;
