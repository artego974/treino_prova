import z, { email } from "zod"

export const guestSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    cpf: z.string().min(11),
    phone: z.string(),
    table_number: z.number(),
})