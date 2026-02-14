import { PrismaClient } from "@prisma/client";

console.log("🚨 DATABASE_URL AT RUNTIME:", process.env.DATABASE_URL);

const prisma = new PrismaClient();

export default prisma;
