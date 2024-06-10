import { Router } from "express";
import travelController from "../controllers/travel.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const travelRouter = Router();

travelRouter.post("/", travelController.createTravelController);

export default travelRouter;