import { CheckCircle, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/stars.jpg"
            alt="Fondo de productividad"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Organiza tus tareas
              <span className="block text-indigo-600">como nunca antes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              La aplicación más intuitiva para gestionar tus proyectos,
              colaborar con tu equipo y alcanzar tus objetivos de manera
              eficiente.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/homePage">
                <button className="text-lg px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                  Comenzar Gratis
                </button>
              </Link>
              <button className="text-lg px-8 py-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg font-semibold transition-colors">
                Ver Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Usuarios activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Tareas completadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  99%
                </div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características que te encantarán
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diseñado para hacer tu vida más productiva y organizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Súper Rápido
              </h3>
              <p className="text-gray-600">
                Interfaz optimizada para que puedas agregar y gestionar tareas
                en segundos
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Colaboración
              </h3>
              <p className="text-gray-600">
                Trabaja en equipo, asigna tareas y mantén a todos sincronizados
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Intuitivo
              </h3>
              <p className="text-gray-600">
                Diseño limpio y fácil de usar, sin curva de aprendizaje
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para ser más productivo?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya han transformado su forma de
            trabajar
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
                Empezar
              </button>
            </div>
            <p className="text-sm text-indigo-200 mt-2">
              Gratis por 14 días. No se requiere tarjeta de crédito.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <CheckCircle className="h-6 w-6 text-indigo-400" />
              <span className="text-lg font-semibold">TidyTask </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Términos
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Soporte
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaskMaster. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
