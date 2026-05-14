import type {Request, Response} from 'express'

export function createCredentials(req: Request, res: Response){
    try {
        const title = req.body.title;
        const email = req.body.email;
        const password = req.body.password;
        const notes = req.body.notes;
        const website = req.body.website;
        const expireFrequency = req.body.expireFrequency;

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