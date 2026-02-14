import app from "./app";
import dotenv from "dotenv";
import prisma from "./lib/prisma";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer() {
  await prisma.$connect();
  console.log("✅ Database connected");

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);

  });

  console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("REFRESH_SECRET:", process.env.REFRESH_SECRET);

}

startServer();

