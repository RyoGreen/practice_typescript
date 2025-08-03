import { Module } from '@nestjs/common';
import { UserController } from './app.controller';
import { UserUsecase } from './usecase/user';
import { PrismaModule } from './prisma/prisma.module';
import { IUserRepository } from './domain/user';
import { UserRepository } from './infrastructure/user';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserUsecase,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class AppModule {}
