import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();


userRouter.post("/", userController.createUserController);

userRouter.use(authMiddleware);
userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.patch("/:id", userController.updateUserController);
userRouter.delete("/:id", userController.deleteUserController);

export default userRouter;