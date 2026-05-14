import z from 'zod';

export const credentialObject = z.object({ 
    
    title: z.string(),
    email: z.string(),
    password: z.string().min(8),
    notes: z.string().max(200),
    website: z.url(),
    expireFrequency: z.enum(["3", "6"]) //3 -> months and 6 -> months

});