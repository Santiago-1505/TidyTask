import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-6xl mb-4">📭</div>
        <h1 className="text-2xl font-semibold mb-2">¡No hay tareas todavía!</h1>
        <p className="text-zinc-400 mb-6">Crea tu primera tarea para comenzar a organizarte.</p>
        <Link
          to="/add-task"
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-semibold transition-all"
        >
          Crear tarea
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-6">
      <h1 className="text-white text-3xl font-semibold mb-6">Tus Tareas</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;