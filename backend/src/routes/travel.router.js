import { Router } from "express";
import travelController from "../controllers/travel.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const travelRouter = Router();

travelRouter.get("/", travelController.getAllTravelController);

travelRouter.use(authMiddleware);
travelRouter.post("/", travelController.createTravelController);
travelRouter.get("/search", travelController.searchTravelsByDestinyController);
travelRouter.get("/:id", travelController.getTravelByIdController);
travelRouter.patch("/:id", travelController.updateTravelController);
travelRouter.delete("/:id", travelController.deleteTravelController);


export default travelRouter;