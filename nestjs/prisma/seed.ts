import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
            posts: {
                create: {
                    title: 'Check out Prisma with Next.js',
                    content: 'https://www.prisma.io/nextjs',
                    published: true,
                },
            },
        },
    })
    await prisma.status.createMany(
        {
            data: [
                { id: 1, name: 'active' },
                { id: 2, name: 'inactive' },
                { id: 3, name: 'suspended' },
            ],
        },
    )

    await prisma.statusMapping.createMany({
        data: [
            {
                userId: user.id,
                statusId: 1,
            },
            {
                userId: user.id,
                statusId: 2,
            },
        ],
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
