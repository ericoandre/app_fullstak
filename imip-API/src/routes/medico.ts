import Router, { NextFunction, Request, Response } from 'express';

const router = Router();

const medicos = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
];

router.get('/', (req: Request, res: Response, nex: NextFunction) => {
    res.json(medicos);
});

export {router};