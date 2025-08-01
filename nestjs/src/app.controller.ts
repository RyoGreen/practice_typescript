import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserUsecase } from './usecase/user';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
  @Post('post')
  postBody(@Body() createUserDto: { name: string; age: number }): string {
    return `Received name: ${createUserDto.name}, age: ${createUserDto.age}`;
  }
}

@Controller('users')
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
}
