import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge as ShadcnBadge } from "@/components/ui/badge";

function ProjectCard({ proyecto, colorMap, onClick }) {
  return (
    <Card className="mr-1 ml-1 shadow-lg bg-white transition-transform hover:scale-[1.03] hover:shadow-xl border border-gray-200 cursor-pointer group animate-fade-in" onClick={onClick}>
      <CardHeader className="flex flex-col items-center">
        <img src={proyecto.avatar} alt={proyecto.titulo} className="w-16 h-16 rounded-full shadow mb-2 border-2 border-white object-cover group-hover:scale-105 transition-transform duration-200" />
        <CardTitle className="text-lg font-bold text-gray-800 min-h-[3.5rem] flex items-center justify-center text-center mb-2">
          {proyecto.titulo}
        </CardTitle>
        <div className="flex flex-wrap justify-center gap-1 mb-1">
          {proyecto.tecnologias.map((tec, i) => (
            <ShadcnBadge key={i} className={`rounded px-2.5 py-0.5 text-xs font-semibold border ${colorMap[tec] || "bg-gray-100 text-gray-800 border-gray-200"}`}>{tec}</ShadcnBadge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-justify mb-4 min-h-[5.5rem] text-sm">{proyecto.descripcion}</p>
        <span className="inline-block text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors text-sm">Ver detalle</span>
      </CardContent>
    </Card>
  );
}

export default ProjectCard; 
