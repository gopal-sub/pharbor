import express from 'express';
import type {Request, Response} from 'express';
import { error } from 'node:console';


const Router = express.Router;

export const sessionRouter = Router()

sessionRouter.post('/', (req: Request, res: Response)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        

    } catch (e) {
        throw error(e)
    }
})