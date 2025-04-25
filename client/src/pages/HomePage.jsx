import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-6">
      <motion.div
        className="bg-zinc-800 w-full max-w-2xl p-10 rounded-xl shadow-2xl space-y-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Título y descripción */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">¡Bienvenido a TidyTasks!</h1>
          <p className="text-zinc-300 mt-2">Gestiona tus tareas de forma fácil y eficiente</p>
        </div>

        {/* Resumen de tareas */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1 bg-yellow-500 text-zinc-900 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">Tareas Pendientes</h2>
            <p className="text-3xl font-bold mt-2">{pendingTasks.length}</p>
          </div>
          <div className="flex-1 bg-green-500 text-zinc-900 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">Tareas Completadas</h2>
            <p className="text-3xl font-bold mt-2">{completedTasks.length}</p>
          </div>
        </div>

        {/* Acciones rápidas */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/add-task"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-center font-semibold py-2 px-6 rounded-md transition-all w-full"
          >
            Crear nueva tarea
          </Link>
          <Link
            to="/tasks"
            className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-6 rounded-md transition-all w-full"
          >
            Ver todas las tareas
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;