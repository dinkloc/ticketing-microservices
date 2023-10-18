import express from "express";
import { signout } from "../controllers/signoutController";

const router = express.Router();

router.post("/api/users/signout", signout);

export { router as signoutRouter };
