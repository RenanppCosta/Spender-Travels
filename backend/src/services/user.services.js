import userRepository from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

const createUserService = async (body) => {
    let { name, email, password, location } = body;

    if(!name || !email || !password || !location ) throw new Error("Registre todos os campos corretamente");

    password = bcrypt.hashSync(password, 10);

    const user = await userRepository.createUserRepository({
        name,
        email,
        password,
        location
    });

    return user;
}

const getAllUserService = async ()=>{
    const users = await userRepository.getAllUserRepository();

    if(users.length == 0) throw new Error("Não há usuários cadastrados");

    return users;
}

const getUserByIdService = async (id) => {
    const user = await userRepository.getUserByIdRepository(id);

    if(!user) throw new Error("Não existe usuário com esse Id");

    return user;
}

const updateUserService = async (id, body) => {
    const { name, email, password, location } = body;

    const ExistingUser = await userRepository.getUserByIdRepository(id);

    if(!ExistingUser) throw new Error("Não existe usuário com esse Id");

    if(!name && !email && !password && !location ) throw new Error("Registre todos os campos corretamente");

    const user = await userRepository.updateUserRepository(id, body);

    return user;
}

const deleteUserService = async (id) => {
    const ExistingUser = await userRepository.getUserByIdRepository(id);

    if(!ExistingUser) throw new Error("Não existe usuário com esse Id");

    await userRepository.deleteUserRepository(id);
}

export default{
    createUserService,
    getAllUserService,
    getUserByIdService,
    updateUserService,
    deleteUserService
}