import { error } from "node:console";
import type {Request, Response, NextFunction} from "express"

export async function createSession(req: Request, res: Response, next: NextFunction) {
    try {
        
    } catch (e) {
        throw error(e)
    }
}