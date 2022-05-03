import supertest from "supertest";
import app from "../src/app.js";
import { prisma } from "../src/database.js";
import tokenFactory from "./factories/tokenFactory.js";
import testFactory from "./factories/testFactory.js";
import requiredFactory from "./factories/requiredFactory.js";


describe("Route/Tests tests - POST/PATCH tests", () => {
  beforeEach(truncateTables);

  afterAll(disconnect);

  it("should return 422 given a invalid body", async () => {


    const token = await tokenFactory()

    const body = {};

    const response = await supertest(app).post("/test").send(body).set('Authorization', token);


    expect(response.status).toEqual(422);
  });


  it("should return 201 and persist the user given a valid inputs", async () => {

    const { categoryId, teacherDisciplineId } = await requiredFactory()

    const token = await tokenFactory()

    const test = testFactory(categoryId, teacherDisciplineId)

    const response = await supertest(app).post("/test").send(test).set('Authorization', token);


    const tests = await prisma.test.findMany({
      where: {
        name: test.name,
      },
    });

    expect(response.status).toEqual(201);
    expect(tests.length).toEqual(1)
  });

  it("should add view given a valid patch request", async () => {

    const { categoryId, teacherDisciplineId } = await requiredFactory()

    const token = await tokenFactory()

    const test = testFactory(categoryId, teacherDisciplineId)

    const response = await supertest(app).post("/test").send(test).set('Authorization', token);

    const tests = await prisma.test.findMany({
      where: {
        name: test.name,
      },
    });


    const testId = tests[0].id

    const { viewCount: testViewCountBefore } = await prisma.test.findUnique({ where: { id: testId } })

    await supertest(app).patch(`/test/${testId}`).send({}).set('Authorization', token);

    const { viewCount: testViewCountAfter } = await prisma.test.findUnique({ where: { id: testId } })

    const result = testViewCountAfter - testViewCountBefore

    expect(result).toEqual(1)
  });

});




async function disconnect() {
  await prisma.$disconnect();
}





async function truncateTables() {
  await prisma.$executeRaw`TRUNCATE TABLE 
  user, 
  test, 
  teacher, 
  category, 
  "teacherDiscipline", 
  discipline, 
  term;`;
}