import express from "express";
import cors from "cors";
import authRoutes from "./auth/auth.routes";
import taskRoutes from "./tasks/task.routes";


const app = express();
// const cors = require("cors");

// Middleware
app.use(cors({
     origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

export default app;



