import { Router } from 'express';
import loginRouter from './login.routes';

const router = Router();

router.use('/auth', loginRouter);

export default router;
