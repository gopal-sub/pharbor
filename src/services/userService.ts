import { error } from 'node:console';
import type {UserType} from '../types/userType.js';
import {prisma} from '../initDabaseConnection.js';



export async function createUserService(user:UserType) {
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

export async function findUserByEmail(email: string) {
    try {
        const user = prisma.user.findFirst({
            where: { email: email },
        });
        return user
    } catch (e) {
        throw error(e)
        
    }
}