const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
dotenv.config();

app.listen(3000, ()=> console.log("Estou rodando na porta 3000"));