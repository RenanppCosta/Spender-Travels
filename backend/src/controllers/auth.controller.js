import authServices from "../services/auth.services.js";

const login = async (req,res) =>{
    const body = req.body;

    try {
        const user = await authServices.loginService(body);

        return res.send(user.token);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default {
    login
}