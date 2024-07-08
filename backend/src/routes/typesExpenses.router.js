import { Router } from "express";
import typesExpenseController from "../controllers/typesExpense.controller.js";

const typeRouter = Router();

typeRouter.post("/", typesExpenseController.createTypeOfExpenseController);

export default typeRouter;