import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { Password } from "../services/password";
const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new BadRequestError("Invalid credentials");
  }

  const checkPassword = await Password.compare(existingUser.password, password);
  if (!checkPassword) {
    throw new BadRequestError("Invalid credentials");
  }
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );
  // Store it on session object
  req.session = {
    jwt: userJwt,
  };

  console.log("save successfully");
  res.status(200).send(existingUser);
};

export { signin };