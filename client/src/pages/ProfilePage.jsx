import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth(); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-6">
      <motion.div
        className="bg-zinc-800 w-full max-w-md p-10 rounded-xl shadow-2xl text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center mb-6">
          <div className="bg-indigo-600 text-white p-3 rounded-full text-3xl font-bold shadow-lg">
            👤
          </div>
          <h1 className="ml-3 text-3xl font-semibold tracking-wide">Perfil</h1>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-sm text-zinc-400">Nombre de usuario:</h2>
            <p className="text-lg">{user?.username || "Usuario invitado"}</p>
          </div>
          <div>
            <h2 className="text-sm text-zinc-400">Correo electrónico:</h2>
            <p className="text-lg">{user?.email || "correo@ejemplo.com"}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProfilePage;
