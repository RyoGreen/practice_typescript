import { IStatusRepository, Status } from 'src/domain/status';
import { PrismaClient } from '@prisma/client';

export class StatusRepository implements IStatusRepository {
  prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async Get(): Promise<Status[]> {
    const status = await this.prisma.status.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return status.map(
      (s) =>
        new Status({
          id: s.id,
          name: s.name,
        }),
    );
  }
  async GetById(id: number): Promise<Status | null> {
    const status = await this.prisma.status.findUnique({
      where: {
        id: id,
      },
    });
    if (!status) return null;
    return new Status({
      id: status.id,
      name: status.name,
    });
  }
  async Create(createStatus: string): Promise<Status> {
    const status = await this.prisma.status.create({
      data: {
        name: createStatus,
      },
    });
    return new Status({
      id: status.id,
      name: status.name,
    });
  }
  async Update(status: Status): Promise<Status> {
    const updatedStatus = await this.prisma.status.update({
      where: {
        id: status.id,
      },
      data: {
        name: status.name,
      },
    });
    return new Status({
      id: updatedStatus.id,
      name: updatedStatus.name,
    });
  }
  async Delete(id: number): Promise<void> {
    await this.prisma.status.delete({
      where: {
        id: (id = id),
      },
    });
  }
}
