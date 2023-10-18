import express from "express";
import { currentUser } from "../controllers/currentuserController";
import { middlewareCurrentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  middlewareCurrentUser,
  requireAuth,
  currentUser
);

export { router as currentUserRouter };
