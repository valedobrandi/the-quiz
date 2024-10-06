import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/user.controller';
import * as middlewares from '../middlewares';

const userController = new UserController();

const router = Router();

// router.get(
//   '/linkdin',
//   (
//     req: Request,
//     res: Response,
//     next: NextFunction,
//   ) => userController.singIn(req, res, next),
// );

// router.get(
//   '/linkedin/callback',
//   (
//     req: Request,
//     res: Response,
//     next: NextFunction,
//   ) => userController.auth(req, res, next),
// );

router.post(
  '/register',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => middlewares.validateLogin(req, res, next),
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => userController.register(req, res, next),
);

router.get(
  '/access',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => userController.access(req, res, next),
);

export default router;
