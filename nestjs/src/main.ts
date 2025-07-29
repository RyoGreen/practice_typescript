import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function bootstrap() {
    prisma.$connect
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
