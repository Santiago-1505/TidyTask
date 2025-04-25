import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTaskRequest, updateTaskRequest} from "../api/tasks.js"; 

function TaskFormPage() {
  const { id } = useParams(); 
  const { createTask } = useTasks();
  const [taskData, setTaskData] = useState(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await getTaskRequest(id);
          setTaskData(response.data);
          setValue("title", response.data.title);
          setValue("description", response.data.description);
        } catch (error) {
          console.error("Error al obtener la tarea:", error);
        }
      };
      fetchTask();
    }
  }, [id, setValue]); 

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (id) {
        await updateTaskRequest(id, data);
      } else {
        createTask(data);
      }
      navigate("/tasks");
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  });

  if (!taskData && id) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-4">
      <motion.div
        className="bg-zinc-800 w-full max-w-md p-10 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center mb-6">
          <div className="bg-indigo-600 text-white p-2 rounded-full text-3xl font-bold shadow-lg">
            ✓
          </div>
          <h1 className="ml-3 text-white text-3xl font-semibold tracking-wide">
            {id ? "Editar tarea" : "Crear tarea"}
          </h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <motion.input
            type="text"
            placeholder="Título de la tarea"
            {...register("title", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.title && (
            <p className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              El título es requerido
            </p>
          )}

          <motion.textarea
            placeholder="Descripción de la tarea"
            {...register("description", { required: true })}
            rows="5"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          {errors.description && (
            <p className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              La descripción es requerida
            </p>
          )}

          <motion.input
            type="date"
            {...register("date", { required: false })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.dueDate && (
            <p className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              La fecha límite es requerida
            </p>
          )}

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md mt-4 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {id ? "Actualizar tarea" : "Guardar tarea"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default TaskFormPage;
