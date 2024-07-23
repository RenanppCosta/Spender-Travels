import z from "zod";

export const userSchema = z.object({
    name: z.string().min(3, "O nome de usuário deverá ter pelo menos 3 caracteres"),
    email: z.string().email(),
    password: z.string().min(6, "A senha deverá ter pelo menos 6 caracteres"),
    location: z.string().min(3, "Sua localização deverá ter pelo menos 3 caracteres")
});