import { CheckCircle, Star, Users, Zap } from "lucide-react";

export default function FooterCard() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CheckCircle className="h-6 w-6 text-indigo-400" />
            <span className="text-lg font-semibold">TaskMaster</span>
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
  );
}
