import { IUserRepository, User, CreateUser } from 'src/domain/user';
import { PrismaClient } from '@prisma/client';

export class UserRepository implements IUserRepository {
  prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async Get(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return users.map(
      (user) =>
        new User({
          id: user.id,
          email: user.email,
          name: user.name ?? '',
        }),
    );
  }
  async GetById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) return null;
    return new User({
      id: user.id,
      email: user.email,
      name: user.name ?? '',
    });
  }
  async Create(createUser: CreateUser): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email: createUser.email,
        name: createUser.name,
      },
    });
    return new User({
      id: user.id,
      email: user.email,
      name: user.name ?? '',
    });
  }
  async Update(user: User): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: user.email,
        name: user.name,
      },
    });
    return new User({
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name ?? '',
    });
  }
  async Delete(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: (id = id),
      },
    });
  }
}
