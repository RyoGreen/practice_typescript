import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
    this.$connect()
      .then(() => console.log('Prisma connected successfully'))
      .catch((error) => console.error('Prisma connection error:', error));
  }
}
