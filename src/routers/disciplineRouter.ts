import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js"

const disciplineRouter : Router = Router()

disciplineRouter.get("/discipline", disciplineController.getAllDisciplines)

export default disciplineRouter