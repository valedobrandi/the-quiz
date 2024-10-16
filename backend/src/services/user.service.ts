import * as bcrypt from 'bcryptjs';

import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { jwtSign } from '../utils/jwt.util';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async logIn(username: string, email: string, password: string): 
  Promise<ServiceResponse<string>> {
    
    const user = await this.userModel.getByEmail(email);

    if (!user) {
      return { status: 'NOT_FOUND', data: {message: 'User not found'} };
    }

    const decoded = bcrypt.compare(password, user.password);

    if (!decoded) {
      return { status: 'UNAUTHORIZED', data: {message: 'Wrong password'} };
    }

    const token = jwtSign({ username: username  });

    return { status: 'SUCCESSFUL', data: token };
  }

  public async register(
    username: string,
    email: string,
    password: string,
  ): Promise<ServiceResponse<string>> {

    const checkEmailInDatabase = await this.userModel.getByEmail(email);

    if (checkEmailInDatabase) return {
      status: 'UNAUTHORIZED', data: { message: 'user already registered'} 
    }

    const checkUsernameInDatabase = await this.userModel.getByUsername(username);

    if (checkUsernameInDatabase) return { 
      status: 'INVALID_DATA', data: { message: 'username already exists'} 
    }

    const user = await this.userModel.register(username, email, password);

    const token = jwtSign({ username: user });

    return { status: 'CREATED', data: token };
  }
}
