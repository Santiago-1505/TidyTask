import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-zinc-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          TidyTasks
        </Link>
        <ul className="flex gap-4 text-white font-medium items-center">
          <li>
            <Link
              to="/tasks"
              className="hover:text-indigo-400 transition-colors"
            >
              Tareas
            </Link>
          </li>
          <li>
            <Link
              to="/add-task"
              className="hover:text-indigo-400 transition-colors"
            >
              Nueva tarea
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="text-sm text-zinc-300">
                Bienvenido,{" "}
                <Link
                  to="/profile"  // Link al perfil del usuario
                  className="text-white font-semibold hover:text-indigo-400 transition-colors"
                >
                  {user.username}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
