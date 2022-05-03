import { Request, Response } from 'express';
import * as disciplineServices from "../services/disciplineService.js"

export async function getAllDisciplines(req: Request, res: Response) {
  
  const data = await disciplineServices.getAllDisciplines()

  res.send(data)
}