import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.get(
  '/linkdin',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => userController.singIn(req, res, next),
);

router.get(
  '/linkedin/callback',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => userController.auth(req, res, next),
);

export default router;
