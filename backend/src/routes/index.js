import { Router } from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import travelRouter from "./travel.router.js";
import typeRouter from "./typesExpenses.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/login", authRouter);
router.use("/travel", travelRouter);
router.use("/types", typeRouter);

export default router;