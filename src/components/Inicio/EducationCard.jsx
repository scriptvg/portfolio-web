import { HiOutlineAcademicCap } from "react-icons/hi";

function EducationCard({ edu, onDiplomaClick }) {
  // Determinar el tipo de bootcamp para el badge
  let badgeColor = "bg-blue-100 text-blue-700 border-blue-300";
  if (edu.titulo.toLowerCase().includes("frontend")) badgeColor = "bg-pink-100 text-pink-700 border-pink-300";
  if (edu.titulo.toLowerCase().includes("backend")) badgeColor = "bg-green-100 text-green-700 border-green-300";
  if (edu.titulo.toLowerCase().includes("full stack")) badgeColor = "bg-blue-100 text-blue-700 border-blue-300";

  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-200 hover:shadow-2xl animate-fade-in relative overflow-hidden">
      {/* Badge tipo bootcamp */}
      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${badgeColor} shadow-sm z-10 font-mono tracking-wide uppercase`}>{edu.titulo.split(" ")[2]}</span>
      <div className="flex flex-col items-center mb-4">
        <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center shadow mb-2">
          <img src={edu.img} alt={edu.institucion} className="w-10 h-10 object-contain rounded" />
        </div>
        <HiOutlineAcademicCap className="text-blue-500 text-2xl mb-1" />
      </div>
      {/* Título mejorado */}
      <h3 className="text-2xl font-extrabold text-blue-900 font-serif text-center mb-2 tracking-tight drop-shadow-sm underline decoration-blue-300/60 decoration-2 underline-offset-4 leading-tight">
        {edu.titulo}
      </h3>
      <div className="flex flex-col items-center mb-2 gap-0.5">
        <span className="text-base font-semibold text-gray-700 font-sans tracking-wide leading-snug">{edu.institucion}</span>
        <span className="text-xs text-blue-600 font-bold not-italic font-mono tracking-wider uppercase">{edu.periodo}</span>
      </div>
      <div className="text-gray-800 text-justify text-[1.05rem] leading-relaxed mb-4 font-normal font-sans px-1">
        {edu.descripcion}
      </div>
      {edu.diploma && (
        <div className="flex flex-col items-center mt-auto">
          <img
            src={edu.diploma}
            alt={`Diploma de ${edu.titulo}`}
            className="w-24 h-24 object-contain rounded shadow-lg cursor-pointer border-2 border-blue-200 hover:scale-105 hover:border-blue-400 transition-transform duration-200 bg-white"
            title="Ver diploma"
            onClick={() => onDiplomaClick(edu.diploma)}
          />
          <span className="text-xs text-gray-500 mt-1 font-sans">Haz clic para ampliar</span>
        </div>
      )}
    </div>
  );
}

export default EducationCard; 
