import axios from "./axios";

export const getTasksRequest = async () => axios.get("/tasks");

export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = async (task) => axios.post("/tasks", task);

export const updateTaskRequest = async (id, updatedFields) =>
  axios.put(`/tasks/${id}`, updatedFields);

export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);
