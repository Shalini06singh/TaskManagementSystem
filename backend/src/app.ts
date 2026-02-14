import express from "express";
import cors from "cors";
import authRoutes from "./auth/auth.routes";
import taskRoutes from "./tasks/task.routes";


const app = express();

// Middleware
app.use(cors({
    origin: [
      "http://localhost:3000",
      "https://task-management-system-ruby-rho.vercel.app/"
    ],
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



