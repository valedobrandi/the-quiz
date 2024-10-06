import { IUsers } from '../Interfaces/users/IUsers';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { jwtSign } from '../utils/jwt.util';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async register(
    username: string,
    password: string,
  ): Promise<ServiceResponse<string>> {
    const user = await this.userModel.register(username, password);

    const token = jwtSign({ username: user });

    return { status: 'CREATED', data: token };
  }
}
