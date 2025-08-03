import { Status } from './status';

export class User {
  id: number;
  email: string;
  name: string;
  status?: Status[];

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.status = user.status;
  }
}

export class CreateUser {
  email: string;
  name: string;

  constructor(user: CreateUser) {
    this.email = user.email;
    this.name = user.name;
  }
}

export const IUserRepository = Symbol('IUserRepository');
export interface IUserRepository {
  Get(): Promise<User[]>;
  GetById(id: number): Promise<User | null>;
  Create(user: CreateUser): Promise<User>;
  Update(user: User): Promise<User>;
  Delete(id: number): Promise<void>;
}
