import { IUsers } from './IUsers';

export interface IUserModel {
  findUser(email: string): Promise<IUsers | null>;
}
