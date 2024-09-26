/* eslint-disable class-methods-use-this */
import { IUsers } from '../Interfaces/users/IUsers';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async register(
    username: string,
    password: string,
  ): Promise<ServiceResponse<IUsers | null>> {
    const user = await this.userModel.register(username, password);
    if (!user) {
      return { status: 'CONFLICT', data: { message: 'User already exists}' } };
    }
    return { status: 'CREATED', data: user };
  }
}
