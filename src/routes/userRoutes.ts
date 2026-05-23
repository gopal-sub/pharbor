import express from 'express';
import type {Request, Response} from 'express';
import {createUser} from '../controller/userController.js'



export const userRouter = express.Router()


userRouter.post('/createuser', createUser)