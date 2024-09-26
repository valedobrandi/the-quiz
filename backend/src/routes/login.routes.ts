import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';

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

router.post(
  '/register',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => userController.register(req, res, next),
);

export default router;
