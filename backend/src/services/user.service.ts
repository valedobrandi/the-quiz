import * as bcrypt from 'bcryptjs';
import { env } from 'process';

import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { jwtSign } from '../utils/jwt.util';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async logIn(username: string, password: string): 
  Promise<ServiceResponse<string>> {
    
    const user = await this.userModel.getUser(username);

    if (!user) {
      return { status: 'NOT_FOUND', data: {message: 'User not found'} };
    }

    const decoded = bcrypt.compare(password, user.password);

    if (!decoded) {
      return { status: 'UNAUTHORIZED', data: {message: 'Wrong password'} };
    }


    return { status: 'SUCCESSFUL', data: user.username };
  }

  public async register(
    username: string,
    password: string,
  ): Promise<ServiceResponse<string>> {
    const user = await this.userModel.register(username, password);

    const token = jwtSign({ username: user });

    return { status: 'CREATED', data: token };
  }
}
