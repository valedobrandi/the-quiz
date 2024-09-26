import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import QuizService from '../services/quiz.service';

export default class QuizController {
  constructor(private quizService = new QuizService()) {}

  public async quizQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.quizService.quizQuestions();
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
