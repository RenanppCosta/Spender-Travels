import authRepository from "../repositories/auth.repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginService = async (body) => {
    const {email, password } = body;

    if(!(email && password)) throw new Error ("Usuário ou senha obrigatórios");

    const user = await authRepository.loginRepository(email);

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    
    if(user && passwordIsValid){
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET,{expiresIn: "24h"});

        return { token };
    }else{
       throw new Error ("Usuário ou Senha estão errados!");
    }
}

export default {
    loginService
}