import prisma from "./prisma.js";

const createTypeOfExpenseRepository = (body) => prisma.typesExpenses.create({data: body});

const getAllTypeOfExpenseRepository = () => prisma.typesExpenses.findMany();


export default {
    createTypeOfExpenseRepository,
    getAllTypeOfExpenseRepository
}