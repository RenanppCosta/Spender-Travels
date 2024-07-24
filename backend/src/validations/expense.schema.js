import z from "zod";

export const expenseSchema = z.object({
    description: z.string().min(4),
    value: z.number().positive(),
    type: z.number().int(),
    travels: z.number().int(),
});