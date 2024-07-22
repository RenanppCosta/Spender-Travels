import { Router } from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import travelRouter from "./travel.router.js";
import typeRouter from "./typesExpenses.router.js";
import expenseRouter from "./expense.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/login", authRouter);
router.use("/travel", travelRouter);
router.use("/types", typeRouter);
router.use("/expense", expenseRouter);

export default router;