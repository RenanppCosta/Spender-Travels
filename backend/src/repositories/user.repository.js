import  prisma from "./prisma.js"

const createUserRepository = (body) => prisma.user.create({data: body});

const findEmailByUser = (email) => prisma.user.findUnique({where: email});

const getAllUserRepository = () => prisma.user.findMany({
    select: {
        id: true,
        name: true,
        email: true,
        location: true,
        Travels: true
    }
})

const getUserByIdRepository = (id) => prisma.user.findUnique({
    where: {
        id: Number(id)
    },
    select:{
        id: true,
        name: true,
        email: true,
        location: true,
        Travels: {
            include:{
                Expenses: true
            }
        }
    }

});

const updateUserRepository = (id, body) => prisma.user.update({
    data: body,
    where: {
        id: Number(id)
    }
});

const deleteUserRepository = (id) => prisma.user.delete({where: {id: Number(id)}});

export default{
    createUserRepository,
    findEmailByUser,
    getAllUserRepository,
    getUserByIdRepository,
    updateUserRepository,
    deleteUserRepository
}