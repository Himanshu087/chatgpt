import express from "express";
import { defaultRouter } from "./defaultRoute";
import { gptAuth } from "./gptAuth";
import { gptModels } from "./gptModels";

export const routes = express.Router();

routes.use(defaultRouter);
routes.use(gptAuth);

routes.use(gptModels);
