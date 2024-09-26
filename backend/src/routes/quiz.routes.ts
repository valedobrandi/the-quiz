import { NextFunction, Request, Response, Router } from 'express';
import QuizController from '../controllers/quiz.controller';

const quizController = new QuizController();
const router = Router();

router.get(
  '',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => quizController.quizQuestions(req, res, next),
);

export default router;
