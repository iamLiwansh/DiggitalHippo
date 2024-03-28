import { z } from "zod"
// checking validations
export const AuthCredentialValidator = z.object({
    email: z.string().email(),//email() check validity
    password: z.string().min(8,{message:'Password Must be at least 8 characters long'}),
})

export type TAuthCredentialValidator = z.infer<typeof AuthCredentialValidator>