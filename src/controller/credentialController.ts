import type {Request, Response} from 'express';
import {createCredential, get_credentials_all, update_credetial, delete_credetial} from '../services/credentialService.js'


export async function createCredentials_controller(req: Request, res: Response){
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

export async function getCredentials_controller(req: Request, res:Response){
    try {
        //@ts-ignore
        const userID = req.header.userID;
        const users_credentials = await get_credentials_all(userID);
        res.send(users_credentials);

    } catch (e) {
        throw console.error(e);
        
        
    }
}

export async function updateCredential_controller(req: Request, res:Response){
    try{
        const credential_update = {
            title: req.body.title,
            email: req.body.email,
            password: req.body.password,
            notes: req.body.notes,
            website: req.body.website,
            expireFrequency: req.body.expireFrequency,
        }
        const credentialId = Number(req.body.credentialId);
        


        const response = await update_credetial(credentialId, credential_update)
        res.send(response)
    }
    catch (e) {
        throw console.error(e);
        
        
    }
}
export async function deleteCredential_controller(req: Request, res:Response){
    try {
        const credentialId = Number(req.body.credentialId)
        const response  = await delete_credetial(credentialId)
        res.send(response)
        

    } catch (e) {
        throw console.error(e);
        
        
    }
}