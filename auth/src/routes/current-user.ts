import express from "express";
import { currentUser } from "../controllers/currentuserController";
import { middlewareCurrentUser } from "@dlngtickets/common/";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  middlewareCurrentUser,
  currentUser
);

export { router as currentUserRouter };