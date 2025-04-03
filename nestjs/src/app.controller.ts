import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

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
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): string {
    return this.appService.getHello();
  }
  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
}
