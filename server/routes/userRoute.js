import express from 'express';
import { getUser, login, logout, register } from '../controllers/userController.js';
import { AuthUser } from '../utils/Authentication.js';

const userRouter = express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/user", AuthUser);

export default userRouter;


