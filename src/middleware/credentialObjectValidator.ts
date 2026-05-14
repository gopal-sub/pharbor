import {credentialObject} from '../objectValidator/credentialValidator.js';
import type {Request, Response, NextFunction} from 'express'

export function userValidatorInputCreateUser(req: Request, res: Response, next:  NextFunction){
    const result = credentialObject.safeParse({
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
} 