import prisma from "./prisma.js";

const createExpenseRepository = (body) => prisma.expenses.create({
    data:{
    ...body,
    travels: { connect:{ id: body.travels } },
    type: { connect: {id: body.type }}
    }
});

const getAllExpenseRepository = () => prisma.expenses.findMany();

const getExpenseByIdRepository = (id) => prisma.expenses.findUnique({where:{id: Number(id)}});

const updateExpenseRepository = (id, body) => prisma.expenses.update({
    data: {
        ...body,
        type: {
            connect: { id: body.type }
        },
        travels: {
            connect: { id: body.travels }
        }
    },
    where: {
        id: Number(id)
    }
});

const deleteExpenseRepository = (id) => prisma.expenses.delete({where:{id: Number(id)}});


export default {
    createExpenseRepository,
    getAllExpenseRepository,
    getExpenseByIdRepository,
    updateExpenseRepository,
    deleteExpenseRepository
}