import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const uploadFile = async (req: Request, res: Response) => {
    console.log( req.file );
    res.json({})
}




