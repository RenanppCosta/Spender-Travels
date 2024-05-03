import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());
dotenv.config();

app.listen(3000, ()=> console.log("Estou rodando na porta 3000"));