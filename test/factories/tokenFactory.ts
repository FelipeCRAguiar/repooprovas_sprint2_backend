import supertest from "supertest";
import app from "../../src/app.js";
import userFactory from "./userFactory.js";
import loginFactory from "./loginFactory.js"

export default async function tokenFactory() {

  const body = userFactory();
  await loginFactory(body);

  const response = await supertest(app).post("/sign-in").send(body);

  return response.text

}