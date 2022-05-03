import { Router } from "express";
import * as teacherController from "../controllers/teacherController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const teacherRouter : Router = Router()

teacherRouter.get("/teacher", ensureAuthenticatedMiddleware, teacherController.getAllTeachers)

export default teacherRouter