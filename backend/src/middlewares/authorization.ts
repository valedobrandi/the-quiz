import { NextFunction, Request, Response } from 'express';
import ICustomError from '../Interfaces/ICustomError';

import { jwtVerify } from '../utils/jwt.util';
import UserModel from '../models/UserModel';

const authorization = async (req: Request, res: Response, next: NextFunction) => {
  const userModel = new UserModel();
  const Bearer = req.cookies.access_token	;
  console.log(Bearer);
  try {
    
    if (!Bearer) return res.status(401).json({ message: 'Token not found' });

    const payload = jwtVerify(Bearer);
    const user = await userModel.getByEmail(payload.username);
    if (!user) return res.status(401).json({ message: 'Token must be a valid token' });

    res.locals.user = user;

    return next();
  } catch (error) {
    const customError = error as ICustomError;
    customError.message = 'Token must be a valid token';
    customError.statusCode = 401;

    next(customError);
  }
};

export default authorization;
