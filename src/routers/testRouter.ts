import { Router } from "express";
import testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";

const testRouter = Router();

testRouter.use(ensureAuthenticatedMiddleware)

testRouter.get("/tests", testController.find);
testRouter.post("/test", validateSchemaMiddleware(testSchema), testController.createTest)
testRouter.patch("/test/:id", testController.addView)

export default testRouter;
