import prisma from "./prisma.js";

const createTravelRepository = (body) => prisma.travels.create({
    data:{
    ...body,
    user: { connect: { id: body.user } }
}});

const getAllTravelRepository = () => prisma.travels.findMany({
    select: {
        id: true,
        destiny: true,
        departureDate: true,
        returnDate: true,
        initialBudget: true,
        numberOfPeople: true,
        user: {
            select: {
                id: true,
                name: true,
                location: true
            }
        }
    }
});

export default{
    createTravelRepository,
    getAllTravelRepository
}
