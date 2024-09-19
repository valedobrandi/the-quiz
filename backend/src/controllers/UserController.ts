import { NextFunction, Request, response, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { nanoid } from 'nanoid';


export default class UserController {
  constructor(private userService = new UserService()) { }

  public async singIn(req: Request, res: Response, next: NextFunction) {
    try {

      const authorization = 'https://www.linkedin.com/oauth/v2/authorization'
      const redirectUri = encodeURIComponent('http://localhost:3001/auth/linkedin/callback');
      const scope = encodeURIComponent('profile');
      const state = nanoid(10);
      const client_id = process.env.VITE_LINKDIN_ID || '';
      res.cookie('oauth_state', state, { httpOnly: true, secure: true });
      const linkdinAuth =
        `${authorization}?response_type=code&client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
     
        res.status(mapStatusHTTP('SUCESSFULL')).json(linkdinAuth);
      } catch (error) {
      next(error)
    }
  }


  public async auth(req: Request, res: Response, next: NextFunction) {
    const authorizationCode = req.query.code;
    console.log(req.query);

  }
}
