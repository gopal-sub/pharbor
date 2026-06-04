import z from 'zod';

const credentialType = {
    title: z.string(),
    email: z.string(),
    password: z.string().min(8),
    notes: z.string().max(200),
    website: z.url(),
    expireFrequency: z.enum(["3", "6"]) //3 -> months and 6 -> months
}

export const CreateCredentialObject_zod_type = z.object(credentialType);
export const UpdateCredentialObject_zod_type = CreateCredentialObject_zod_type.partial().extend({
    credentialId: z.string(),
});;
