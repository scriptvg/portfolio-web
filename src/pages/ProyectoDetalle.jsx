import { useParams, useNavigate } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { HiOutlineDocumentText, HiOutlineCheckCircle, HiOutlineLightBulb } from "react-icons/hi"

const colorMap = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  OpenAI: "bg-green-100 text-green-800 border-green-200",
  Replit: "bg-orange-100 text-orange-800 border-orange-200",
  "Exportación formato R (Moodle-compatible)": "bg-blue-100 text-blue-800 border-blue-200",
  Moodle: "bg-indigo-100 text-indigo-800 border-indigo-200",
  PHP: "bg-purple-100 text-purple-800 border-purple-200",
  MySQL: "bg-cyan-100 text-cyan-800 border-cyan-200",
  "Personalización avanzada": "bg-pink-100 text-pink-800 border-pink-200",
  React: "bg-sky-100 text-sky-800 border-sky-200",
  Vite: "bg-violet-100 text-violet-800 border-violet-200",
  TailwindCSS: "bg-teal-100 text-teal-800 border-teal-200",
  PokeAPI: "bg-red-100 text-red-800 border-red-200",
};

const proyectos = [
  {
    id: "ia-moodle-exam-creator",
    titulo: "Creador de Exámenes con IA para Moodle (Academia UPC)",
    descripcion: "Plataforma que genera exámenes automáticamente usando inteligencia artificial y los integra en Moodle. Permite a docentes crear, editar y exportar cuestionarios de forma eficiente.",
    avatar: "https://ui-avatars.com/api/?name=IA+Moodle&background=0D8ABC&color=fff",
    demo: null,
    tecnologias: ["Python", "OpenAI", "Replit", "Exportación formato R (Moodle-compatible)"],
    colaboracion: "Proyecto colaborativo en equipo ágil",
    ubicacion: "Esparza, Costa Rica",
    fechas: "2024 – 2025",
    descripcionLarga: "Se desarrolló una aplicación web que permite la creación automatizada de exámenes académicos compatibles con Moodle, utilizando inteligencia artificial (IA). Los usuarios pueden generar preguntas y respuestas automáticamente mediante prompts personalizados, o también redactarlas manualmente para ser transformadas al formato R compatible con Moodle.",
    funcionalidades: [
      "Interfaz intuitiva para redactar preguntas manualmente o mediante IA",
      "Instalación, configuración y despliegue de GenExam en hosting privado (Replit).",
      "Integración con la API de OpenAI para la generación automática de preguntas de opción múltiple.",
      "Conversión automática al formato R requerido por Moodle.",
      "Validación de preguntas antes de exportarlas.",
      "Historial de generación de exámenes por usuario.",
      "Descarga del examen en archivo .txt listo para subir a la plataforma Moodle."
    ],
    logros: [
      "Implementación de prompts estructurados para mejorar la calidad y coherencia de las preguntas generadas por IA.",
      "Estructura Full Stack profesional: frontend en Python y Replit, backend en MySQL",
      "Configuración completa del dominio  (Replit).",
      "Automatización de procesos de validación y exportación.",
      "Control de errores y manejo de límites de la API."
    ]
  },
  {
    id: "academia-virtual-upc",
    titulo: "Academia virtual UPC - OfitechLat",
    descripcion: "Se diseñó e implementó una plataforma de educación virtual basada en Moodle, orientada a la capacitación de profesionales y estudiantes en áreas técnicas. La academia ofrece múltiples cursos en línea con seguimiento, evaluación automatizada y emisión de certificados.",
    avatar: "https://ui-avatars.com/api/?name=Academia+UPC&background=6D28D9&color=fff",
    demo: null,
    tecnologias: ["PHP", "Namecheap (dominio - hosting)", "MySQL", "Moodle"],
    colaboracion: "Proyecto colaborativo en equipo ágil",
    ubicacion: "Esparza, Costa Rica",
    fechas: "2023 – 2024",
    descripcionLarga: "Se diseñó e implementó una plataforma de educación virtual basada en Moodle, orientada a la capacitación de profesionales y estudiantes en áreas técnicas. La academia ofrece múltiples cursos en línea con seguimiento, evaluación automatizada y emisión de certificados. El proyecto se desarrolló para Academia UPC en colaboración con OfitechLat, integrando herramientas de código abierto y personalización avanzada de Moodle para lograr una experiencia educativa profesional.",
    funcionalidades: [
      "Instalación, configuración y despliegue de Moodle en hosting privado (Namecheap).",
      "Personalización del tema visual, identidad institucional (logotipo, colores, favicon).",
      "Creación de categorías de cursos, asignación de profesores y usuarios con diferentes roles.",
      "Integración de evaluaciones automatizadas, cuestionarios y foros.",
      "Gestión de certificados automáticos al finalizar cursos.",
      "Optimización de base de datos y configuración avanzada de roles y permisos."
    ],
    logros: [
      "Configuración completa de Moodle (vía cPanel y acceso FTP).",
      "Manejo de bases de datos MySQL para autenticación, cursos, usuarios y resultados.",
      "Personalización del sistema para cubrir necesidades específicas de UPC.",
      "Resolución de problemas de seguridad básica (SSL, control de acceso, backups).",
      "Acompañamiento en capacitaciones para administradores del sistema."
    ]
  },
  {
    id: "pokeproyecto",
    titulo: "PokeProyecto",
    descripcion: "Esta Pokédex es una aplicación web moderna desarrollada con React y Vite que permite explorar, buscar y visualizar información detallada de Pokémon utilizando la PokeAPI. El objetivo es servir como ejemplo educativo de buenas prácticas en React, consumo de APIs, manejo de rutas, hooks personalizados y estilizado con TailwindCSS.",
    avatar: "https://ui-avatars.com/api/?name=PokeProyecto&background=F59E42&color=fff",
    demo: "https://pokeproyectoapi.netlify.app/",
    tecnologias: ["React", "Vite", "TailwindCSS", "PokeAPI"],
    colaboracion: "Proyecto personal",
    ubicacion: "Esparza, Costa Rica",
    fechas: "2023",
    descripcionLarga: "Incluye búsqueda, filtrado y visualización de detalles de cada Pokémon, con una interfaz moderna y responsiva.",
    funcionalidades: [
      "Búsqueda y filtrado de Pokémon",
      "Visualización de detalles de cada Pokémon",
      "Interfaz responsiva y moderna",
      "Consumo eficiente de la PokeAPI"
    ],
    logros: [
      "Uso de hooks personalizados en React",
      "Buenas prácticas de consumo de APIs",
      "Diseño UI/UX atractivo"
    ]
  }
]

function Badge({ children, color }) {
  return <span className={`inline-block ${color} text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded border transition-all duration-200`}>{children}</span>;
}

function ProyectoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyecto = proyectos.find(p => p.id === id);

  if (!proyecto) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
        <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">Volver</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-2">
      {/* Header visual */}
      <div className="w-full max-w-5xl mx-auto rounded-t-xl bg-gradient-to-r from-blue-100 via-white to-blue-50 flex flex-col items-center py-8 shadow-md">
        <img src={proyecto.avatar} alt={proyecto.titulo} className="w-20 h-20 rounded-full shadow-lg mb-4 border-4 border-white object-cover" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-center font-serif mb-2 text-gray-900 drop-shadow-sm animate-fade-in">
          {proyecto.titulo}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {proyecto.tecnologias.map((tec, i) => (
            <Badge key={i} color={colorMap[tec] || "bg-gray-100 text-gray-800 border-gray-200"}>{tec}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-2">
          <span>{proyecto.colaboracion}</span>
          <span>·</span>
          <span>{proyecto.ubicacion}</span>
          <span>·</span>
          <span>{proyecto.fechas}</span>
        </div>
        {proyecto.demo && (
          <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-1.5 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors text-sm font-medium">Ver Demo</a>
        )}
      </div>
      <Card className="w-full max-w-5xl mx-auto shadow-xl border border-gray-200 rounded-t-none">
        <CardHeader>
          <div className="flex flex-col items-center mb-2">
            <HiOutlineDocumentText className="text-blue-500 text-3xl mb-1" />
            <CardTitle className="text-xl font-bold text-center font-serif mb-1 text-gray-800">Resumen del Proyecto</CardTitle>
            <span className="text-sm text-gray-500 font-medium">Visión general y puntos clave</span>
          </div>
        </CardHeader>
        <Separator className="mb-4" />
        <CardContent>
          <div className="mb-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
            <span className="font-semibold flex items-center gap-2"><HiOutlineDocumentText className="inline text-blue-400 text-lg" /> Descripción del Proyecto:</span>
            <p className="text-justify mt-1 text-gray-800 leading-relaxed">
              {proyecto.descripcionLarga.split(/(React|Django|Python|MySQL|Moodle|OpenAI|TailwindCSS|PokeAPI)/g).map((part, i) =>
                ["React","Django","Python","MySQL","Moodle","OpenAI","TailwindCSS","PokeAPI"].includes(part)
                  ? <span key={i} className="font-bold text-blue-700">{part}</span>
                  : <span key={i}>{part}</span>
              )}
            </p>
          </div>
          <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-400 rounded">
            <span className="font-semibold flex items-center gap-2"><HiOutlineCheckCircle className="inline text-green-500 text-lg" /> Funcionalidades principales:</span>
            <ul className="list-disc list-inside text-justify mt-1 space-y-1 text-gray-700">
              {proyecto.funcionalidades.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
          <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <span className="font-semibold flex items-center gap-2"><HiOutlineLightBulb className="inline text-yellow-500 text-lg" /> Logros técnicos:</span>
            <ul className="list-disc list-inside text-justify mt-1 space-y-1 text-gray-700">
              {proyecto.logros.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
          <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline mt-6">Volver</button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProyectoDetalle 
