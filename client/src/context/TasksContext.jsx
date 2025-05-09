import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, updateTaskRequest } from "../api/tasks.js";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
        console.log(error);
    }
  };

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const deleteTask = async (id) => {
  try {
    await deleteTaskRequest(id);
    setTasks(tasks.filter(task => task._id !== id));
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (id, updatedFields) => {
  try {
    
    
    
    const res = await updateTaskRequest(id, updatedFields); 
    
    
    setTasks(tasks.map(task => task._id === id ? { ...task, ...updatedFields } : task));
  } catch (error) {
    console.log(error);
  }
};


  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}