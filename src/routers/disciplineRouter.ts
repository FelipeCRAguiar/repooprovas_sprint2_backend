import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js"
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const disciplineRouter : Router = Router()

disciplineRouter.get("/discipline", ensureAuthenticatedMiddleware, disciplineController.getAllDisciplines)

export default disciplineRouter