import prisma from "./prisma.js";

const createTravelRepository = (body) => prisma.travels.create({
    data:{
    ...body,
    user: { connect: { id: body.user } }
}});

const getAllTravelRepository = ({skip, take}) => prisma.travels.findMany({
    skip,
    take,
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
    },
});

const countAllTravel = async () => prisma.travels.count();

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
});

const getAllTravelByUserRepository = (userId) => prisma.travels.findMany({
    where:{
        userId: Number(userId)
    },
    select:{
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


export default{
    createTravelRepository,
    getAllTravelRepository,
    getTravelByIdRepository,
    updateTravelRepository,
    deleteTravelRepository,
    searchTravelsByDestinyRepository,
    getAllTravelByUserRepository,
    countAllTravel
}
