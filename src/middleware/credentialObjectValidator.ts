import {CreateCredentialObject_zod_type, UpdateCredentialObject_zod_type} from '../objectValidator/credentialValidator.js';
import type {Request, Response, NextFunction} from 'express'

export function userValidatorInputCreateCredential(req: Request, res: Response, next:  NextFunction){
    const result = CreateCredentialObject_zod_type.safeParse({
        title: req.body.title,
        email: req.body.email,
        password: req.body.password,
        notes: req.body.notes,
        website: req.body.website,
        expireFrequency: req.body.expireFrequency
        
    })

    if(!result.success){
        res.status(400).json({
            msg: "Invalid input",
            errors: result.error.flatten().fieldErrors
        })
        return;
    }
    next();
};

export function userValidatorInputUpdateCredential(req: Request, res: Response, next:  NextFunction){
    const result = UpdateCredentialObject_zod_type.safeParse({
        title: req.body.title,
        email: req.body.email,
        password: req.body.password,
        notes: req.body.notes,
        website: req.body.website,
        expireFrequency: req.body.expireFrequency,
        credentialId: req.body.credentialId
        
    })

    if(!result.success){
        res.status(400).json({
            msg: "Invalid input",
            errors: result.error.flatten().fieldErrors
        })
        return;
    }
    next();
} 