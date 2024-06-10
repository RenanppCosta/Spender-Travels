import { Router } from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import travelRouter from "./travel.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/login", authRouter);
router.use("/travel", travelRouter);

export default router;