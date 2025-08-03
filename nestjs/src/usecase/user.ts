import { Get, Post, Injectable, Patch, Delete, Inject } from '@nestjs/common';
import { IUserRepository } from 'src/domain/user';
import { User, CreateUser } from 'src/domain/user';

@Injectable()
export class UserUsecase {
  constructor(
    @Inject(IUserRepository) private readonly userRepository: IUserRepository,
  ) {}

  @Get()
  async List(): Promise<User[]> {
    return await this.userRepository.Get();
  }
  @Get()
  async Get(id: number): Promise<User | null> {
    return (await this.userRepository.GetById(id)) ?? null;
  }
  @Post()
  async Create(user: CreateUser): Promise<User> {
    const existingUser = await this.userRepository.GetByEmail(user.email);
    if (existingUser) {
      throw new Error(`User with email ${user.email} already exists.`);
    }
    return await this.userRepository.Create(user);
  }
  @Patch()
  async Update(user: User): Promise<User> {
    return await this.userRepository.Update(user);
  }
  @Delete()
  async Delete(id: number): Promise<void> {
    return await this.userRepository.Delete(id);
  }
}
