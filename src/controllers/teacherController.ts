import { Request, Response } from 'express';
import * as teacherServices from "../services/teacherService.js";

export async function getAllTeachers(req: Request, res: Response) {
  
  const data = await teacherServices.getAllTeachers()

  res.send(data)
}