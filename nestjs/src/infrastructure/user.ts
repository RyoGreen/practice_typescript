import { IUserRepository, User, CreateUser } from "src/domain/user";
import { prisma } from "./postgresql";

export class UserRepository implements IUserRepository {
    async Get(): Promise<User[]> {
        const users = await prisma.user.findMany();
        return users.map(user => new User({
            id: user.id,
            email: user.email,
        }))
    }
    async GetById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            }
        });
        if (!user) return null;
        return new User({
            id: user.id,
            email: user.email,
            name: user.name ?? "",
        }
        );

    }
    async Create(post: CreateUser): Promise<User> {

    }
    async Update(post: User): Promise<User> {

    }
    async Delete(id: number): Promise<void> {

    }
}
