import { error } from "node:console";
import {prisma} from '../initDabaseConnection.js';
import type {CredentialType} from '../types/credentialType.js'

export async function createCredential(credential:CredentialType ) {

    try {
        const createdRecord = await prisma.credential.create({
            data: {
                title: credential.title,
                password: credential.password,
                website: credential.website,
                expireFrequency: credential.expireFrequency,
                expireOn: credential.expireOn,
                email: credential.email,
                user: {
                    connect: {
                        id: credential.userId
                    },
                },

            }
        });
        return createdRecord
    } catch (e) {
        throw error(e)
        
    }
    
}

