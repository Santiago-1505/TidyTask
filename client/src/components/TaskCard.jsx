import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      deleteTask(task._id);
    }
  };

  const toggleCompleted = () => {
    updateTask(task._id, { ...task, completed: !task.completed });
  };

  return (
    <div
      className={`bg-zinc-800 text-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col gap-2 border-l-4 ${
        task.completed ? "border-green-500" : "border-yellow-500"
      }`}
    >
      <h2 className="text-xl font-semibold">
        {task.title}{" "}
        {task.completed && (
          <span className="text-green-400 text-sm">(Completada)</span>
        )}
      </h2>

      <p className="text-zinc-300">{task.description}</p>

      {task.date && (
        <p className="text-sm text-yellow-400">
          Fecha límite:{" "}
          {new Date(
            new Date(task.date).getTime() +
              new Date().getTimezoneOffset() * 60000
          ).toLocaleDateString()}
        </p>
      )}

      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={toggleCompleted}
          className={`${
            task.completed ? "bg-yellow-500" : "bg-green-500"
          } hover:opacity-90 px-3 py-1 rounded text-sm`}
        >
          {task.completed ? "Marcar como pendiente" : "Marcar como completada"}
        </button>

        <Link
          to={`/tasks/${task._id}`}
          className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
        >
          Editar
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
