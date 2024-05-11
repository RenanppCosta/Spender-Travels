import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", userController.createUserController);
userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.patch("/:id", userController.updateUserController);
userRouter.delete("/:id", userController.deleteUserController);

export default userRouter;