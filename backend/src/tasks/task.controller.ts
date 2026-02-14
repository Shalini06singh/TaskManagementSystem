import { Request, Response } from "express";
import * as service from "./task.service";

export async function getAll(req: Request, res: Response) {
  const userId = (req as any).user.userId;
  res.json(await service.getTasks(userId));
}

export async function create(req: Request, res: Response) {
  const userId = (req as any).user.userId;
  res.status(201).json(
    await service.createTask(userId, req.body.title)
  );
}

export async function toggle(req: Request, res: Response) {
  const userId = (req as any).user.userId;
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  res.json(await service.toggleTask(id, userId));
}

export async function remove(req: Request, res: Response) {
  const userId = (req as any).user.userId;
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Task ID is required" });
  }

  await service.deleteTask(id, userId);
  res.status(204).send();
}
