import { faker } from "@faker-js/faker";

export default function testFactory(categoryId: number, teacherDisciplineId: number): any {
  return {
    name: faker.name.jobTitle(),
    pdfUrl: faker.internet.url(),
    categoryId: categoryId,
    teacherDisciplineId: teacherDisciplineId
  };
}