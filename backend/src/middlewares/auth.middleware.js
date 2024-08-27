import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) =>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).send("Não autorizado.")
    }

    try {
        const replace = token.replace("Bearer ", "");
        jwt.verify(replace, process.env.JWT_SECRET, (error, decoded)=>{
            console.log(decoded);
            req.userId = decoded.id;
            next();
        });
        
    } catch (error) {
        return res.status(401).send({message:"Credenciais inválidas."});
    }
}