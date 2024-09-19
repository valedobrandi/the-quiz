import { NextFunction, Request, Response } from 'express';
import validateLoginFields from './validations/loginValidation';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const error = validateLoginFields({ email, password });

    if (error) {
      return res.status(mapStatusHTTP(error.status))
        .json(error.data);
    }

    return next();
  } catch (error) {
    next(error);
  }
};

export default validateLogin;
