import testRepository from "../repositories/testRepository.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

async function createTest(data: any) {
  const testData = { ...data }
  testData.categoryId = parseInt(testData.categoryId)
  testData.teacherDisciplineId = parseInt(testData.teacherDisciplineId)
  
  await testRepository.createTest(testData)
}

export default {
  find,
  createTest
};