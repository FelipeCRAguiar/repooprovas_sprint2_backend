import * as teacherRepository from "../repositories/teacherRepository.js";

export async function getAllTeachers() {
  
  const data = await teacherRepository.findAllTeachers()

  return data
}