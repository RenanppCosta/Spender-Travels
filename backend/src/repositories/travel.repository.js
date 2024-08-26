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
        },
        Expenses: {
            select: {
                id: true,
                description: true,
                value: true,
                type: {
                    select:{
                        name: true
                    }
                }
            }
        }
    }
});

const getTravelByIdRepository = (id) => prisma.travels.findUnique({
    where: {
        id: Number(id)
    },
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

const updateTravelRepository = (id, body) => prisma.travels.update({
    data: body,
    where: {
        id: Number(id)
    }
});

const deleteTravelRepository = (id) => prisma.travels.delete({where: {id: Number(id)}});

const searchTravelsByDestinyRepository = (destiny) => prisma.travels.findMany({
    where:{
        destiny:{
            contains: destiny,
        }
    }
})


export default{
    createTravelRepository,
    getAllTravelRepository,
    getTravelByIdRepository,
    updateTravelRepository,
    deleteTravelRepository,
    searchTravelsByDestinyRepository
}
