import { PrismaClient } from "@prisma/client";
import { error } from "node:console";

export const prisma = new PrismaClient();

export async function testDbConnection() {
    try {
        await prisma.$connect()
        console.log("database connected")
    } catch (e) {
        throw error(e)
        
    }
}

