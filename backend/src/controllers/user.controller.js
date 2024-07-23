import userServices from "../services/user.services.js";
import { userSchema } from "../validations/user.schema.js";

const createUserController = async (req, res) =>{
    const body = req.body;
    try {
        const data = userSchema.parse(body)
        const user = await userServices.createUserService(data);

        return res.send(user);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllUserController = async (req,res) =>{
    try {
        const users = await userServices.getAllUserService();

        return res.send(users);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserByIdController = async (req,res) => {
    const { id } = req.params;
    try {
        const user = await userServices.getUserByIdService(id);

        return res.send(user);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUserController = async (req,res) => {
    const { id } = req.params;
    const body = req.body;

    try {
        const user = await userServices.updateUserService(id, body);

        return res.send(user);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUserController = async (req,res) => {
    const { id } = req.params;

    try {
        await userServices.deleteUserService(id);

        return res.send("Usuário deletado com sucesso!");

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default{
    createUserController,
    getAllUserController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}