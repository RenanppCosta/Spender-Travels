import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
app.use(router);

app.listen(3000, ()=> console.log("Estou rodando na porta 3000"));