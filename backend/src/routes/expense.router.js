import { Router } from "express";
import expenseController from "../controllers/expense.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const expenseRouter = Router();

expenseRouter.post("/", expenseController.createExpenseController);
expenseRouter.get("/", expenseController.getAllExpenseController);
expenseRouter.patch("/:id", expenseController.updateExpenseController);

export default expenseRouter;