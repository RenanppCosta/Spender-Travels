import prisma from "./prisma.js";

const createExpenseRepository = (body) => prisma.expenses.create({
    data:{
    ...body,
    travels: { connect:{ id: body.travels } },
    type: { connect: {id: body.type }}
    }
});


export default {
    createExpenseRepository
}