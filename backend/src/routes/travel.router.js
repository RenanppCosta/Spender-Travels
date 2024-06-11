import { Router } from "express";
import travelController from "../controllers/travel.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const travelRouter = Router();

travelRouter.post("/", travelController.createTravelController);
travelRouter.get("/", travelController.getAllTravelController);

export default travelRouter;