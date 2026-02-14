"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import BackgroundWrapper from "../components/BackgroundWrapper";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Tasks() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch {
      router.push("/login");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await api.post("/tasks", { title });
    toast.success("Task added");
    setTitle("");
    loadTasks();
  };

  const toggleTask = async (id: string) => {
    await api.patch(`/tasks/${id}`);
    toast.success("Task updated");
    loadTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
    toast.success("Task deleted");
    loadTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed" && !task.completed) return false;
    if (filter === "pending" && task.completed) return false;
    if (!task.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <BackgroundWrapper>
      <div className="tasks">
        {/* <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl"> */}

        <h1 className="text-3xl font-bold mb-6 text-center">My Tasks</h1>
        <input
          className="w-full p-3 mb-4 rounded-lg text-black"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full p-3 mb-6 rounded-lg text-black"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <div className="add">
          <input
            className="flex-1 p-3 rounded-lg text-black"
            value={title}
            placeholder="New task"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-lg font-bold"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white/20 p-3 rounded-lg"
            >
              <span
                className="cursor-pointer"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
                onClick={() => toggleTask(task.id)}
              >
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="hover:scale-110 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </BackgroundWrapper>
  );
}
