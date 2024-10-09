import { NextFunction, Request, Response } from "express";
// import { nanoid } from 'nanoid';
import UserService from "../services/user.service";
import mapStatusHTTP from "../utils/mapStatusHTTP";
import { jwtSign } from "../utils/jwt.util";

export default class UserController {
  constructor(private userService = new UserService()) {}

  // public async singIn(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const authorization = 'https://www.linkedin.com/oauth/v2/authorization';
  //     const redirectUri = encodeURIComponent('http://localhost:3001/auth/linkedin/callback');
  //     const scope = encodeURIComponent('profile');
  //     const state = nanoid(10);
  //     const client_id = process.env.VITE_LINKDIN_ID || '';
  //     res.cookie('oauth_state', state, { httpOnly: true, secure: true });
  //     const linkdinAuth = `${authorization}?response_type=code&client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;

  //     res.status(mapStatusHTTP('SUCESSFULL')).json(linkdinAuth);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // public async auth(req: Request, res: Response, next: NextFunction) {
  //   const authorizationCode = req.query.code;
  //   console.log(req.query);
  // }

  public async logIn(req: Request, res: Response, next: NextFunction) {
    try {

      const { username, password } = req.body;

      const {status, data} = await this.userService.logIn(username, password);

      if (status === 'NOT_FOUND' || status === 'UNAUTHORIZED') {
        return res.status(mapStatusHTTP(status)).json(data);
      }

      if (status === 'SUCCESSFUL') {
        const token = jwtSign({ username: data });

        return res
        .cookie("access_token", `Bearer ${token}`, {
          httpOnly: true,
        })
        .status(mapStatusHTTP(status))
        .json(data)
      }

    } catch (error) {
      next(error);
    }
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const { status, data } = await this.userService.register(
        username,
        password
      );

      return res
        .cookie("access_token", `Bearer ${data}`, {
          httpOnly: true,
        })
        .status(mapStatusHTTP(status))
        .json({ message: "User created" });
    } catch (error) {
      next(error);
    }
  }
}
