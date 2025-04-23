import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

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
            Crear cuenta
          </h1>
        </div>

        {registerErrors.map((error, i) => (
          <div
            className="bg-red-600 text-white p-3 rounded-md my-2 text-sm"
            key={i}
          >
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit} className="space-y-4">
          <motion.input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Nombre de usuario"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.username && (
            <p className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              El nombre de usuario es requerido
            </p>
          )}

          <motion.input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Correo electrónico"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.email && (
            <p className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              El correo electrónico es requerido
            </p>
          )}

          <motion.input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Contraseña"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.password && (
            <p className="bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              La contraseña es requerida
            </p>
          )}

          <motion.button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md mt-4 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Registrarse
          </motion.button>
        </form>

        <p className="flex gap-x-2 justify-center ">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default RegisterPage;
