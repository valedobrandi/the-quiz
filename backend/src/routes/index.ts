import { Router } from 'express';
import loginRouter from './login.routes';
import quizRouter from './quiz.routes';

const router = Router();

router.use('/auth', loginRouter);
router.use('/quiz', quizRouter);

export default router;
