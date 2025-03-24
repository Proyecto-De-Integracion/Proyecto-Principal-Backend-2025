import { Request, Response } from "express";

export const greetingControl: (a: Request, b: Response) => void = (_req: Request, res: Response): void => {
  res.send("Hola mundo");
};
