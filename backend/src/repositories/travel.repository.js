import prisma from "./prisma.js";

const createTravelRepository = (body) => prisma.travels.create({
    data:{
    ...body,
    user: { connect: { id: body.user } }
}});

export default{
    createTravelRepository
}
