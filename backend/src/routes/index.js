import { Router } from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/login", authRouter);

export default router;