import  prisma  from "./prisma.js";

const loginRepository = (email) => prisma.user.findFirst({where:{email}});

export default{
    loginRepository
}