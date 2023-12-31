import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { BadRequestError } from "@dlngtickets/common";
const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  console.log(email, password);
  if (existingUser) {
    throw new BadRequestError("Email in use");
  }

  const user = User.build({ email, password });
  await user.save();

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );
  // Store it on session object
  req.session = {
    jwt: userJwt,
  };

  console.log("save successfully");
  res.status(201).send(user);
};

export { signup };