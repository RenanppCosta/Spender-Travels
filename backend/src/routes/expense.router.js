import { Router } from "express";
import expenseController from "../controllers/expense.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const expenseRouter = Router();

expenseRouter.use(authMiddleware);

expenseRouter.post("/", expenseController.createExpenseController);
expenseRouter.get("/", expenseController.getAllExpenseController);
expenseRouter.patch("/:id", expenseController.updateExpenseController);
expenseRouter.delete("/:id", expenseController.deleteExpenseController);

export default expenseRouter;