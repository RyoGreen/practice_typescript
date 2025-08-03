import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserUsecase } from './usecase/user';
import { CreateUser, User } from './domain/user';
import { UserIn } from './dto/user';

@Controller('user')
export class UserController {
  constructor(private readonly userUsecase: UserUsecase) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userUsecase.List();
  }
  @Get('/:id')
  getUser(@Param() id: number): Promise<User | null> {
    return this.userUsecase.Get(id);
  }
  @Post()
  createUser(@Body() userIn: UserIn): Promise<User> {
    const user = new CreateUser({
      name: userIn.name,
      email: userIn.email,
    });
    return this.userUsecase.Create(user);
  }
}
