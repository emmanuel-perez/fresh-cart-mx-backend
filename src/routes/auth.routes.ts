import { Router } from "express";
import { loginUser, signUpUser } from "../controllers";

export const authRoutes = Router();

authRoutes.post('/login', loginUser );
authRoutes.post('/signup', signUpUser );