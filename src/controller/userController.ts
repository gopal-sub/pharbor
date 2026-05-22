import type {Request, Response} from 'express';



export function createCredentials(req: Request, res: Response){
    try {
        const user = {
            email: req.body.email,
            password: req.body.password,
            createdOn: new Date()
        };




    } catch (e) {
        throw console.error(e);
        
        
    }
    

}