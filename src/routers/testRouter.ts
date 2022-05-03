import { Router } from "express";
import testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";

const testRouter = Router();

testRouter.get("/tests", testController.find);
testRouter.post("/test", validateSchemaMiddleware(testSchema), ensureAuthenticatedMiddleware, testController.createTest)
testRouter.patch("/test/:id", ensureAuthenticatedMiddleware, testController.addView)

export default testRouter;
