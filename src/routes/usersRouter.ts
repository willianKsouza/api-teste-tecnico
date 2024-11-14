import express from 'express'
import { loginUserController } from "@/dependecy_injection/users/loginDI";

const usersRouter = express.Router()

usersRouter.post('/login', (req, res) =>
    loginUserController.index(req, res));

export default usersRouter;