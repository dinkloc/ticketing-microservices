import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import "express-async-errors";
import { json } from "body-parser";
import { errorHandler, NotFoundError } from "@dlngtickets/common";
const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);



app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
