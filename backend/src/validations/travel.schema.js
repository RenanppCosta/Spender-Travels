import z from "zod";

export const travelSchema = z.object({
    destiny: z.string().min(3,"Seu destino deverá ter pelo menos 3 caracteres"),
    departureDate: z.coerce.date(),
    returnDate: z.coerce.date(),
    initialBudget: z.coerce.number().positive(),
    numberOfPeople: z.number().int().min(1),
    user: z.number().int(),
}).refine(data => data.departureDate < data.returnDate , {
    message: "A data de início não pode ser antes da data de término.",
    path:["departureDate"]
});