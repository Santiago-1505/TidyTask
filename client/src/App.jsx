import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return( <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Página principal</h1>} />
      <Route path="/login" element={<h1>Iniciar sesión</h1>} />
      <Route path="/register" element={<h1>Registrarse</h1>} />
      <Route path="/tasks" element={<h1>Página de tareas</h1>} />
      <Route path="/add-task" element={<h1>Nueva tarea</h1>} />
      <Route path="/tasks/:id" element={<h1>Actualizar tarea</h1>} />
      <Route path="/profile" element={<h1>Perfil</h1>} />
    </Routes>
  </BrowserRouter>
  )
}
export default App;
