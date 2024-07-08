import prisma from "./prisma.js";

const createTypeOfExpenseRepository = (body) => prisma.typesExpenses.create({data: body});

export default {
    createTypeOfExpenseRepository
}