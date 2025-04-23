import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TasksContext";
import { useEffect } from "react";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No hay tareas</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={tasks._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
