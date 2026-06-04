import type {Request, Response} from 'express';
import {createUserService, findUserByEmail} from '../services/userService.js'




export async function createUser(req: Request, res: Response){
    try {
        const user = {
            email: req.body.email,
            password: req.body.password,
            createdOn: new Date()
        };
        if(await findUserByEmail(user.email)){
            res.json({
                msg: `User already exists with mail ${user.email}`
            });
            return;
        };
        const createdUser = await createUserService(user);
        res.json({
            msg: "user created",
            email: createdUser.email
        })
    } catch (e) {
        throw console.error(e);      
    }
}
