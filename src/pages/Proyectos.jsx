import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { Badge as ShadcnBadge } from "@/components/ui/badge"
import { useState } from "react"

const proyectos = [
  {
    id: "ia-moodle-exam-creator",
    titulo: "Creador de Exámenes con IA para Moodle (Academia UPC)",
    descripcion: "Aplicación web que permite la creación automatizada de exámenes académicos compatibles con Moodle, utilizando inteligencia artificial (IA). Los usuarios pueden generar preguntas y respuestas automáticamente mediante prompts personalizados, o también redactarlas manualmente para ser transformadas al formato R compatible con Moodle.",
    avatar: "https://ui-avatars.com/api/?name=IA+Moodle&background=0D8ABC&color=fff",
    tecnologias: ["Python", "OpenAI", "Replit", "Moodle"]
  },
  {
    id: "academia-virtual-upc",
    titulo: "Academia virtual UPC - OfitechLat",
    descripcion: "Proyecto desarrollado para Academia UPC en colaboración con OfitechLat, integrando herramientas de código abierto y personalización avanzada de una plataforma de educación virtual basada en Moodle para lograr una experiencia educativa profesional.",
    avatar: "https://ui-avatars.com/api/?name=Academia+UPC&background=6D28D9&color=fff",
    tecnologias: ["Moodle", "PHP", "MySQL"]
  },
  {
    id: "pokeproyecto",
    titulo: "PokeProyecto",
    descripcion: "Esta Pokédex es una aplicación web moderna desarrollada con React y Vite que permite explorar, buscar y visualizar información detallada de Pokémon utilizando la PokeAPI. El objetivo es servir como ejemplo educativo de buenas prácticas en React, consumo de APIs, manejo de rutas, hooks personalizados y estilizado con TailwindCSS.",
    avatar: "https://ui-avatars.com/api/?name=PokeProyecto&background=F59E42&color=fff",
    tecnologias: ["React", "Vite", "TailwindCSS", "PokeAPI"]
  }
]

const colorMap = {
  Python: "bg-yellow-100 text-yellow-800 border-yellow-200",
  OpenAI: "bg-green-100 text-green-800 border-green-200",
  Replit: "bg-orange-100 text-orange-800 border-orange-200",
  Moodle: "bg-indigo-100 text-indigo-800 border-indigo-200",
  PHP: "bg-purple-100 text-purple-800 border-purple-200",
  MySQL: "bg-cyan-100 text-cyan-800 border-cyan-200",
  React: "bg-sky-100 text-sky-800 border-sky-200",
  Vite: "bg-violet-100 text-violet-800 border-violet-200",
  TailwindCSS: "bg-teal-100 text-teal-800 border-teal-200",
  PokeAPI: "bg-red-100 text-red-800 border-red-200",
};

function Proyectos() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const proyectosFiltrados = proyectos.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.tecnologias.some(t => t.toLowerCase().includes(busqueda.toLowerCase()))
  );

  return (
    <section className="w-full max-w-6xl mx-auto py-16 animate-fade-in">
      <h1 className="text-4xl font-bold font-serif text-center mb-10 text-blue-900">Todos mis Proyectos</h1>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Buscar proyecto o tecnología..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:border-blue-400 text-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectosFiltrados.length === 0 && (
          <div className="col-span-full text-center text-gray-500 text-lg">No se encontraron proyectos.</div>
        )}
        {proyectosFiltrados.map((proyecto) => (
          <Card key={proyecto.id} className="shadow-lg transition-transform hover:scale-[1.03] hover:shadow-xl border border-gray-200 cursor-pointer group animate-fade-in bg-white/90" onClick={() => navigate(`/proyectos/${proyecto.id}`)}>
            <CardHeader className="flex flex-col items-center">
              <img src={proyecto.avatar} alt={proyecto.titulo} className="w-16 h-16 rounded-full shadow mb-2 border-2 border-white object-cover group-hover:scale-105 transition-transform duration-200" />
              <CardTitle className="text-lg font-bold text-blue-800 min-h-[3.5rem] flex items-center justify-center text-center mb-2">
                {proyecto.titulo}
              </CardTitle>
              <div className="flex flex-wrap justify-center gap-1 mb-1">
                {proyecto.tecnologias.map((tec, i) => (
                  <span key={i} title={tec}>
                    <ShadcnBadge className={`rounded px-2.5 py-0.5 text-xs font-semibold border ${colorMap[tec] || "bg-gray-100 text-gray-800 border-gray-200"}`}>{tec}</ShadcnBadge>
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-justify mb-4 min-h-[5.5rem] text-sm">{proyecto.descripcion}</p>
              <span className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors text-sm">Ver detalle</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Proyectos 
