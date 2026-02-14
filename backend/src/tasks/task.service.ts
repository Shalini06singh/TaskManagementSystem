import prisma from "../lib/prisma";

export function getTasks(userId: string) {
  return prisma.task.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export function createTask(userId: string, title: string) {
  return prisma.task.create({
    data: { title, userId },
  });
}

export async function toggleTask(id: string, userId: string) {
  const task = await prisma.task.findFirst({
    where: { id, userId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return prisma.task.update({
    where: { id },
    data: { completed: !task.completed },
  });
}

export async function deleteTask(id: string, userId: string) {
  const task = await prisma.task.findFirst({
    where: { id, userId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return prisma.task.delete({
    where: { id },
  });
}
