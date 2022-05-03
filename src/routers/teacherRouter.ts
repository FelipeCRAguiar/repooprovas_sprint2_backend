import { Router } from "express";
import * as teacherController from "../controllers/teacherController.js";

const teacherRouter : Router = Router()

teacherRouter.get("/teacher", teacherController.getAllTeachers)

export default teacherRouter