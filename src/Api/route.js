import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const tasks = await prisma.tasks.findMany();
    res.status(200).json(tasks);
  } else {
    res.status(405).json({ message: 'Only GET requests allowed' });
  }
}