import express, { Request, Response } from "express";
import { body } from "express-validator";
import { signin } from "../controllers/signinController";
import { validateRequest } from "@dlngtickets/common";
const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,
  signin
);

export { router as signinRouter };