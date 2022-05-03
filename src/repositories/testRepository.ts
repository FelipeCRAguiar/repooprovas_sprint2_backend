import { prisma } from "../database.js";

async function getTestsByDiscipline() {
  return prisma.term.findMany({
    include: {
      disciplines: {
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers() {
  return prisma.teacherDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function createTest(data: any) {
  await prisma.test.create({
    data: data
  })
}

async function addView(testId: any) {
  await prisma.test.update({
    where: {
      id: testId
    },
    data : {
      viewCount: { increment: 1 }
    }
  })
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  createTest,
  addView
};
