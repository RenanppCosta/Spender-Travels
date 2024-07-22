import prisma from "./prisma.js";

const createExpenseRepository = (body) => prisma.expenses.create({
    data:{
    ...body,
    travels: { connect:{ id: body.travels } },
    type: { connect: {id: body.type }}
    }
});

const getAllExpenseRepository = () => prisma.expenses.findMany();


export default {
    createExpenseRepository,
    getAllExpenseRepository
}