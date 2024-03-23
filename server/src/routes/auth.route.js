import express from "express";
import { auhtController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

const prefix = "auth";

authRouter.post(`/${prefix}/login`, auhtController.loginController);
authRouter.post(`/${prefix}/signup`, auhtController.signupController);
authRouter.get(`/${prefix}/me`, auhtController.meController);

export default authRouter;
