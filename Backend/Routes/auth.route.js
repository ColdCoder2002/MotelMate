import express from "express";
import { signUp } from "../Controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.post("/signUp", signUp)

export default authRouter;