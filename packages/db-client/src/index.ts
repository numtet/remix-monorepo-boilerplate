// db-client/src/index.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllItems() {
    prisma.$connect();
    return await prisma.item.findMany();
    prisma.$disconnect();
}

export async function getItemById(id: number) {
    prisma.$connect();
    return await prisma.item.findUnique({
        where: { id }
    });
    prisma.$disconnect();
}
