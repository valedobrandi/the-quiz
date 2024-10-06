import { Router } from 'express';
import loginRouter from './user.routes';
import quizRouter from './quiz.routes';
import rankingRouter from './ranking.routes';

const router = Router();

router.use('/auth', loginRouter);
router.use('/quiz', quizRouter);
router.use('/ranking', rankingRouter);

export default router;
