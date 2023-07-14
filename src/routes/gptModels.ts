import { Router } from "express";
import { models } from "../controllers";

export const gptModels = Router();

gptModels.get("/models", models.getAllModels);
gptModels.get("/models/:model", models.getModel);
