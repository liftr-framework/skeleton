import { Request, Response } from 'express';
  
export async function liftrController (req: Request, res: Response) {
    res.send('Lift off!');
};
