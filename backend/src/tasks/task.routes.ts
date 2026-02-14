
import { Router } from "express";
// import { authenticate } from "../middleware/auth.middleware";
import * as controller from "./task.controller";
import { authMiddleware } from "../middleware/auth.middleware";
// import { authMiddleware } from "../auth/auth.middleware";

const router = Router();

// All task routes are protected

// GET /tasks
// router.use(authenticate);
router.use(authMiddleware);
router.get("/", controller.getAll);

// POST /tasks
router.post("/", controller.create);

// PATCH /tasks/:id/toggle
// router.patch("/:id/toggle", controller.toggle);
router.patch("/:id", controller.toggle);

// DELETE /tasks/:id
router.delete("/:id", controller.remove);

export default router;
