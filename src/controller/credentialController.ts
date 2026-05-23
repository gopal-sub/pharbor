import type {Request, Response} from 'express';
import {createCredential} from '../services/credentialService.js'


export async function createCredentials(req: Request, res: Response){
    try {
        const now = new Date()
        const expireOn = new Date(now)
        expireOn.setMonth(expireOn.getMonth() + 6)

        const creadential = {
            title: req.body.title,
            email: req.body.email,
            password: req.body.password,
            notes: req.body.notes,
            website: req.body.website,
            expireFrequency: req.body.expireFrequency,
            userId: 1,
            expireOn: expireOn,
            createdOn: new Date(),
            lastPasswordChange: new Date()
        }


        const createdCredential = await createCredential(creadential)
        res.json(createdCredential)
        return;



    } catch (e) {
        throw console.error(e);
        
        
    }
    

}

export function getCredentials(req: Request, res:Response){
    try {
        res.json({
            List:"creds"
        })

    } catch (e) {
        throw console.error(e);
        
        
    }
}