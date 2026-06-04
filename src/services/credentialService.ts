import { error } from "node:console";
import {prisma} from '../initDabaseConnection.js';
import type {CredentialType} from '../types/credentialType.js'



export async function createCredential(credential: CredentialType) {

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
                lastPasswordChange: credential.lastPasswordChange

            }
        });
        return createdRecord
    } catch (e) {
        throw error(e)
        
    }
    
}

export async function get_credentials_all(userID: number) {
    try {
        const users_creadential = await prisma.credential.findMany({
            where: {
                UserId: userID
            }
        });

        return users_creadential;
    } catch (e) {
        throw error(e)
    }
}


export async function update_credetial(credentialID: number, data: Partial<CredentialType>) {
    try {
        const data_update = await prisma.credential.update({
            where: {
                id: credentialID
            },
            data: data
        });
        return data_update
    } catch (e) {
        throw error(e)
    }
}

export async function delete_credetial(credentialID: number) {
    try {
        const data_delete = await prisma.credential.delete({
            where: {
                id: credentialID
            }
        });
        return data_delete
    } catch (e) {
        throw error(e)
    }
}
