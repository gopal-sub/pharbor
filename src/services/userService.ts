import { error } from 'node:console';
import type {UserType} from '../types/userType.js';
import {prisma} from '../initDabaseConnection.js';




export async function createUser(user:UserType) {
    try {
        const createdRecord = await prisma.user.create({
            data: {
                email: user.email,
                password: user.password,
                createdOn: user.createdOn
            }
        });
        return createdRecord;
    } catch (e) {
        throw error(e)

        
    }
}